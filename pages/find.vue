<template>
    <Navbar />

    <div id="mapContainer" ref="mapContainer" class="map-container h-[80vh] w-full z-0">

        <!-- Current Location BTN -->
        <button @click.prevent="goToCurrentLocation"
            class="current-location-btn bg-[#000000] rounded-full right-0 bottom-0 mb-[40px] mr-[7px] absolute z-10">
            <i class="fas fa-location-arrow text-white text-[15px] p-2"></i>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import mapboxgl, { Marker, Popup, Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Cookies from 'js-cookie';

const config = useRuntimeConfig();

mapboxgl.accessToken = config.public.MAB_BOX_TOKEN;

export default defineComponent({
    setup() {
        interface CwsDataItem {
            cws_name: string;
            cws_image: string[];
            cws_price: string;
            cws_review: {
                user_name: string;
                review_star: number;
                message: string;
            }[];
            cws_star: number;
            cws_openToday: string;
            cws_facilities: string[];
            cws_latitude: string;
            cws_longtitude: string;
        }

        const mapContainer = ref(null);
        const map = ref<Map | null>(null);
        const markers = ref<Marker[]>([]);
        const cws_data = ref<CwsDataItem[]>([]);

        async function fetchData() {
            const response = await fetch('https://wangpa.tensormik.com/wangpa-api/nearbyLocations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_lat: Cookies.get('user_current_lat') ?? '13.7451',
                    user_long: Cookies.get('user_current_long') ?? '100.4999',
                    from: 'findPage'
                })
            });

            if (response.ok) {
                const data: CwsDataItem[] = await response.json();
                console.log(data)
                cws_data.value = data;
            } else {
                console.error('Failed to fetch data');
            }
        }
        onMounted(fetchData);
        watch([cws_data, mapContainer], ([newCwsData, newMapContainer]) => {
            if (cws_data.value.length > 0 && mapContainer.value) {
                map.value = new mapboxgl.Map({
                    container: mapContainer.value,
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: [100.4999, 13.7451],
                    zoom: 13
                });
                goToCurrentLocation()

                console.log('tesss')
                if (cws_data.value.length > 0 && mapContainer.value) {

                    cws_data.value.forEach(dataItem => {
                        const el = document.createElement('div');
                        el.className = 'custom-marker';

                        const imageSrc = dataItem.cws_image.length > 0 ? dataItem.cws_image[0] : 'default-image.png';
                        const price = dataItem.cws_price.length > 0 ? dataItem.cws_price : 'ฟรี';

                        el.innerHTML = `
                            <div class="w-max">
                                <img class="rounded-full w-[50px] h-[50px] flex justify-center" src="${imageSrc}" alt="${dataItem.cws_name}">
                                <p class="text-black text-[14px] font-medium flex justify-center bg-white rounded-[10px] mt-[5px]">${price}</p>
                            </div>`;

                                            const cws_image_element = dataItem.cws_image.map(imageSrc =>
                                                `<div class="col-image">
                                <img class="rounded-[5px] w-[95px] h-[60px] object-cover" src="${imageSrc}">
                            </div>`
                        ).join('');

                        const cws_reviewBox_element = dataItem.cws_review.map(review => {
                            let stars = '';
                            for (let i = 0; i < 5; i++) {
                                stars += i < review.review_star ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
                            }

                            return `
                                <div class="col-review">
                                    <div class="border-[1px] w-max h-[80px] border-black/50 rounded-[10px] p-2">
                                        <div class="flex items-center justify-between space-x-2">
                                            <div class="text-yellow-400">${stars}</div>
                                            <h4 class="text-[13px] text-black">${review.user_name}</h4>
                                        </div>
                                        <h4 class="text-[11px] text-black font-light">${review.message}</h4>
                                    </div>
                                </div>`;
                        }).join('');

                        const popupContent = `
                            <div class="popup-content select-none">
                                <div class="flex space-x-[5px]">
                                    <div class="popup-images">
                                        <img class="w-[120px] h-[80px] rounded-[5px] object-cover" src="${imageSrc}">
                                    </div>
                                    <div>
                                        <h4 class="text-[14px] text-black font-normal">${dataItem.cws_name}</h4>
                                        <h4 class="text-[12px] text-black/50">วันนี้เปิด: ${dataItem.cws_openToday}</h4>
                                        <div class="flex space-x-[5px]">
                                            <h4 class="text-[12px] text-black/50">ราคา: ${dataItem.cws_price}</h4>
                                            <div class="w-[70px] rounded-[10px] bg-[#20DE33] flex justify-center">
                                                <h4 class="text-[12px] text-white">คนใช้น้อย</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full h-[1px] bg-[#8888] my-[20px]"></div>
                                <div class="grid grid-cols-3 gap-2 h-[120px] overflow-y-scroll">${cws_image_element}</div>
                                <div class="w-full h-[1px] bg-[#8888] my-[20px]"></div>
                                <div class="flex justify-between">
                                    <div class="flex items-center text-yellow-400 text-[20px]">
                                        ${[...Array(5)].map((_, i) => `<i class="${i < dataItem.cws_star ? 'fas' : 'far'} fa-star"></i>`).join('')}
                                        <h4 class="text-black/50 text-[15px] mt-[10px] ml-[10px]">${dataItem.cws_star}ดาว</h4>
                                    </div>
                                    <div flex items-center>
                                        <h4 class="text-black/50 mt-[10px]">ความคิดเห็น ${dataItem.cws_review.length} รายการ</h4>    
                                    </div>
                                </div>
                                <div class="flex space-x-2 w-full h-[100px] mt-[10px] overflow-x-scroll">${cws_reviewBox_element}</div>
                            </div>
                        `;

                        const popup = new mapboxgl.Popup({ offset: 50, className: 'findPage_MapBox', closeButton: false })
                            .setHTML(popupContent);

                        if (map.value) {
                            const marker = new mapboxgl.Marker(el)
                                .setLngLat([parseFloat(dataItem.cws_longtitude), parseFloat(dataItem.cws_latitude)])
                                .setPopup(popup)
                                .addTo(map.value);

                            markers.value.push(marker);
                        }
                        if (map.value) {
                            popup.on('open', () => {
                                let popupCoordinates = popup.getLngLat();

                                // Adjust latitude by about 0.009 degrees to move 1 km north
                                let newPopupCoordinates = {
                                    lng: popupCoordinates.lng + 0.0040,
                                    lat: popupCoordinates.lat + 0.0060
                                };
                                if (map.value) {
                                    map.value.flyTo({
                                        center: newPopupCoordinates,
                                        essential: true,
                                        zoom: 15
                                    });
                                }
                            });
                        }
                    });
                }
            }
        }, { immediate: true });

        const goToCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const lngLat = { lng: position.coords.longitude, lat: position.coords.latitude };
                    if (map.value) {
                        map.value.flyTo({ center: lngLat, essential: true, zoom: 15 });
                        new mapboxgl.Marker()
                            .setLngLat(lngLat)
                            .addTo(map.value);

                    }
                }, () => {
                    console.error('Unable to access your location');
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        return { mapContainer, goToCurrentLocation };
    }
});
</script>

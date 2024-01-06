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
import { defineComponent, ref, onMounted } from 'vue';
import mapboxgl, { Marker, Popup } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const config = useRuntimeConfig();

mapboxgl.accessToken = config.public.MAB_BOX_TOKEN;

export default defineComponent({
    setup() {
        const mapContainer = ref<HTMLElement | null>(null);
        const map = ref<mapboxgl.Map | null>(null);
        const markers = ref<Marker[]>([]);

        // Sample data, replace with your API call
        const cws_data = ref([
            {
                cws_name: 'M-Space Major Ratchayothin',
                cws_image: ['/img/mspace.png', '/img/mspace.png', '/img/mspace.png', '/img/mspace.png', '/img/mspace.png', '/img/mspace.png'], // Replace with actual image paths
                cws_price: '250',
                cws_review: [
                    {
                        user_name: 'kankawee',
                        review_star: 5,
                        message: 'Good'
                    },
                    {
                        user_name: 'Niji',
                        review_star: 3,
                        message: 'okay'
                    }
                ],
                cws_star: 4,
                cws_openToday: '08:00 - 20:30',
                cws_facilities: ['plug', 'toilet', 'wifi'],
                cws_latitude: '13.7451',
                cws_longitude: '100.4999'
            },
            {
                cws_name: 'WTF Sapce',
                cws_image: ['/img/kan.png', 'image2.png'], // Replace with actual image paths
                cws_price: '250',
                cws_review: [
                    {
                        user_name: 'kankawee',
                        review_star: 5,
                        message: 'Good'
                    },
                    {
                        user_name: 'Niji',
                        review_star: 3,
                        message: 'okay'
                    }
                ],
                cws_star: 5,
                cws_openToday: '08:00 - 20:30',
                cws_facilities: ['plug', 'toilet', 'wifi'],
                cws_latitude: '13.7451',
                cws_longitude: '100.5999'
            },
        ]);

        onMounted(() => {
            if (!mapContainer.value) return;

            map.value = new mapboxgl.Map({
                container: mapContainer.value,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [parseFloat(cws_data.value[0].cws_longitude), parseFloat(cws_data.value[0].cws_latitude)],
                zoom: 13
            });

            cws_data.value.forEach(dataItem => {
                // Create an HTML element for the custom marker
                const el = document.createElement('div');
                el.className = 'custom-marker'; // You can add a class for additional styling

                // Use the first image from the cws_image array for the marker icon
                // Ensure there's at least one image in the array; otherwise, use a default image
                const imageSrc = dataItem.cws_image.length > 0 ? dataItem.cws_image[0] : 'default-image.png';
                const price = dataItem.cws_price.length > 0 ? dataItem.cws_price : 'ฟรี';

                // Set the innerHTML of the marker element with the image
                el.innerHTML = `<div class="w-max">
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

                    return `<div class="col-review">
                                <div class="border-[1px] w-[200px] h-[80px] border-black/50 rounded-[10px] p-2">
                                    <div class="flex items-center justify-between">
                                        <div class="text-yellow-400">
                                            ${stars}
                                        </div>
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

                // Create a popup for the marker
                const popup = new mapboxgl.Popup(
                    {
                        offset: 50,
                        className: 'findPage_MapBox',
                        closeButton: false
                    }).setHTML(popupContent);

                // Check if the map instance is available before adding the marker
                if (map.value) {
                    if (map.value.getZoom() >= 4) {
                        // Create the marker and add it to the map
                        const marker = new mapboxgl.Marker(el)
                            .setLngLat([parseFloat(dataItem.cws_longitude), parseFloat(dataItem.cws_latitude)])
                            .setPopup(popup)
                            .addTo(map.value);

                        // Push the marker to the markers array for possible future reference
                        markers.value.push(marker);
                    }
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
        });

        const goToCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const lngLat = {
                        lng: position.coords.longitude,
                        lat: position.coords.latitude
                    };
                    if (map.value) {
                        map.value.flyTo({
                            center: lngLat,
                            essential: true,
                            zoom: 15
                        });
                    }
                }, () => {
                    // Handle error
                    console.error('Unable to access your location');
                });
            } else {
                // Handle browser not supporting Geolocation
                console.error('Geolocation is not supported by this browser.');
            }
        };

        return {
            mapContainer,
            goToCurrentLocation
        };
    }
});
</script>
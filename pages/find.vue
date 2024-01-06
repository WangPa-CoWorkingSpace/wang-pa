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
                cws_image: ['/img/mspace.png', 'image2.png'], // Replace with actual image paths
                cws_price: '250',
                cws_review: ['Good', 'Best place'],
                cws_openToday: '08:00 - 20:30',
                cws_facilities: ['plug', 'toilet', 'wifi'],
                cws_latitude: '13.7451',
                cws_longitude: '100.4999'
            },
            {
                cws_name: 'WTF Sapce',
                cws_image: ['/img/kan.png', 'image2.png'], // Replace with actual image paths
                cws_price: '250',
                cws_review: ['Good', 'Best place'],
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

                const popupContent = `
                <div class="popup-content">
                    <h3>${dataItem.cws_name}</h3>
                    <p>Price: ${dataItem.cws_price}</p>
                    <p>Open Today: ${dataItem.cws_openToday}</p>
                    <div class="popup-images">
                        ${dataItem.cws_image.map(src => `<img src="${src}" alt="Image" width="50" height="50">`).join('')}
                    </div>
                    <!-- Add more details from your cws_data here if needed -->
                </div>
            `;

                // Create a popup for the marker
                const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

                // Check if the map instance is available before adding the marker
                if (map.value) {
                    // Create the marker and add it to the map
                    const marker = new mapboxgl.Marker(el)
                        .setLngLat([parseFloat(dataItem.cws_longitude), parseFloat(dataItem.cws_latitude)])
                        .setPopup(popup)
                        .addTo(map.value);

                    // Push the marker to the markers array for possible future reference
                    markers.value.push(marker);
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
                            essential: true
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
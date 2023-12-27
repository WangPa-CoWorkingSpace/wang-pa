<template>
    <div id="mapContainer" ref="mapContainer" class="map-container h-[250px] w-full rounded-[20px] z-0">

        <!-- Current Location BTN -->
        <button @click="goToCurrentLocation" class="current-location-btn bg-[#000000] rounded-full right-0 bottom-0 mb-[40px] mr-[7px] absolute z-10">
        <i class="fas fa-location-arrow text-white text-[15px] p-2"></i>
    </button>
    </div>
    <!-- <div class="bg-blue-400 h-[250px] w-full rounded-[20px]"></div> -->
</template>

<script>
import mapboxgl from "mapbox-gl";
import { defineComponent, ref } from 'vue';
import Cookies from 'js-cookie';

const config = useRuntimeConfig()

mapboxgl.accessToken = (config.public.MAB_BOX_TOKEN)
console.log(config)

export default defineComponent({
    data() {
        return {
            map: null,
            currentMarker: null // Store the current marker
        };
    },
    mounted() {
        this.map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [100.4999, 13.7451],
            zoom: 9,
        });

        // Add click event listener
        this.map.on('click', (e) => {
            this.addMarker(e.lngLat);
        });
    },
    methods: {
        addMarker(lngLat) {
            // If there's already a marker, remove it
            if (this.currentMarker) {
                this.currentMarker.remove();
            }

            // Create a new marker and add it to the map
            this.currentMarker = new mapboxgl.Marker()
                .setLngLat([lngLat.lng, lngLat.lat])
                .addTo(this.map);

            // Output the latitude and longitude
            console.log(`Latitude: ${lngLat.lat}, Longitude: ${lngLat.lng}`);

            // Save lat-long in cookies
            Cookies.set('inform-lat', lngLat.lat);
            Cookies.set('inform-long', lngLat.lng);
        },

        goToCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const lngLat = {
                        lng: position.coords.longitude,
                        lat: position.coords.latitude
                    };

                    // Center the map on the user's location
                    this.map.flyTo({
                        center: lngLat,
                        essential: true // this animation is considered essential with respect to prefers-reduced-motion
                    });

                    // Optionally add a marker at the user's location
                    this.addMarker(lngLat);
                }, () => {
                    // alert('Unable to access your location');
                });
            } else {
                // alert('Geolocation is not supported by this browser.');
            }
        }
    },
    unmounted() {
        if (this.currentMarker) {
            this.currentMarker.remove();
        }
        this.map.remove();
        this.map = null;
    }
});
</script>

<style>
.map-container {
    flex: 1;
}
</style>
<template>
    <Navbar />

    <div class="h-screen main-gardient">
        <div class="pt-[100px] px-[20px] flex space-x-[30px]">
            <i class="fas fa-heart text-[#FF7575] text-[47px]"></i>
            <div>
                <h1 class="text-black text-[25px]">รายการโปรด</h1>
                <h4 class="text-black/50 text-[16px]">{{ userfavCount }} รายการ</h4>
            </div>
        </div>
        <div v-show="userfavCount === 0" class="flex justify-center items-center mt-[300px]">
            <h4 class="text-black/50 text-[25px]">ไม่มีรายการโปรด <i class="far fa-frown"></i></h4>
        </div>
        <div class="flex justify-center">
        <div class="grid grid-cols-2 gap-3 px-[10px] mt-[50px]">
            <div v-for="(slide, index) in favorite_Data" :key="index">
                <div class="w-[150px]">
                    <div class="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.25)]">
                        <NuxtImg format="webp" class="rounded-t-[10px] w-[150px] h-[120px] object-cover" :src="slide.image"
                            :alt="slide.title" objectFit='contain' loading="lazy" />
                        <div class="p-2">
                            <h1 class="text-black font-medium text-[15px] text-left w-full h-[25px] overflow-hidden">{{
                                slide.title }}
                            </h1>
                            <h4 class="text-[13px] text-left text-[#1cb7d9]">{{ slide.price }} บาท</h4>
                            <div class="h-[10px] w-full flex text-black/50 text-[11px] space-x-2 mb-4">
                                <i v-for="feature in slide.features" :class="`fas fa-${feature}`" :key="feature"></i>
                            </div>
                            <h4 class="text-[11px] text-left text-black/50">{{ slide.openingHours }}</h4>
                            <div class="flex justify-between items-center mt-[30px]">
                                <div class="text-yellow-400 text-[10px]">
                                    <i v-for="star in slide.stars" :key="star" :class="`${star} fa-star`"></i>
                                </div>
                                <div
                                    class="h-max w-max bg-[#20DE33] text-white text-[8px] py-[2px] px-[7px] rounded-[20px]">
                                    <h4>{{ slide.capacity }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Cookies from 'js-cookie';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    async setup() {
        //Top10
        const cwsFav_fetch = await fetch('https://wangpa.tensormik.com/wangpa-api/user_cws_fav', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_email: Cookies.get('user_email')
            })
        });

        const favorite_Data = await cwsFav_fetch.json();
        const userfavCount: number = favorite_Data.length;
        return {
            favorite_Data,
            userfavCount
        }
    }
});
</script>
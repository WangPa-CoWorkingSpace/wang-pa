<template>
    <div class="w-screen rounded-t-[40px] bg-gradient-to-r from-[#59C8F7] to-white to-[120%]">
        <div class="mx-[40px] pt-[50px] lg:flex lg:space-x-[360px]">
            <!-- Logo Container -->
            <div class="flex items-center h-[100px] lg:ml-4 lg:mt-4">
                <NuxtImg class="w-[250px] lg:w-[400px]" src="/img/wanpa_logo.png"></NuxtImg>
            </div>
            <!-- Detail -->
            <div class="mt-[20px] lg:mt-[-20px]">
                <h4 class="text-white text-[20px] lg:text-[32px]">ติดต่อเรา</h4>
                <div class="mt-2 space-y-1 text-white font-medium lg:mt-0">
                    <div class="flex items-center">
                        <i class="fas fa-phone-alt mr-2"></i>
                        <h4 class="max-w-[200px]">099-999-9999</h4>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-envelope mr-2"></i>
                        <h4 class="max-w-[200px]">thisisemail@gmail.com</h4>
                    </div>
                    <div class="flex">
                        <i class="fas fa-map-marker-alt mr-2 mt-1"></i>
                        <h4 class="max-w-[200px]">เลขที่ 2398/96 ถนนพหลโยธิน แขวงเสนานิคม เขตจตุจักร กรุงเทพมหานคร 10900</h4>
                    </div>
                </div>
            </div>

            <div class="mt-[20px] lg:mt-[-20px] lg:mr-4">
                <h4 class="text-white text-[20px]">ติดตามเรา</h4>
                <div class="flex items-center mt-2 text-white space-x-[20px]">
                    <NuxtLink class="fab fa-facebook-square text-[35px]" to="" target="_blank"></NuxtLink>
                    <NuxtLink class="fab fa-discord text-[35px]" to="" target="_blank"></NuxtLink>
                    <NuxtLink class="fab fa-twitter text-[35px]" to="" target="_blank"></NuxtLink>
                    <NuxtLink class="fab fa-instagram text-[35px]" to="" target="_blank"></NuxtLink>
                </div>

                <div class="mt-[30px] h-1 w-[200px] bg-white/50"></div>

                <div class="mt-[20px]">
                    <NuxtLink class="text-[16px] text-white" to="">นโยบายความเป็นส่วนตัว</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-[16px] text-white" to="">นโยบายเกี่ยวกับคุ๊กกี้</NuxtLink>
                </div>
            </div>
        </div>
        
        <div class="mt-[20px] lg:mt-[30px] pb-[20px] flex justify-center items-center">
            <h4 class="text-white text-[12px] lg:text-[16px]"><i class="far fa-copyright mr-1"></i>Copyright 2023 Wang-Pa All rights reserved.</h4>
        </div>
    </div>
</template>
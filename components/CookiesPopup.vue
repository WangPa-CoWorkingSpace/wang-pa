<template>
    <div class="fixed w-screen h-[100px] bottom-0 rounded-t-[20px] z-40 bg-gradient-to-r from-[#59C8F7] to-white to-[120%] xl:to-[140%] xl:w-[40%] xl:right-0" :class="{'hidden': alreadyCookies === 'true'}">
        <div class="flex justify-between items-center h-full px-[20px]">
            <h4 class="text-[14px] w-[70%] text-white font-extralight">เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณในเว็บไซต์ของเรา
                ด้วยการใช้บริการของเรานี้คุณยินยอมให้เราใช้คุกกี้ตาม <NuxtLink to="/cookies" target="_blank" class="underline font-medium">นโยบายคุกกี้</NuxtLink> ของเรา
            </h4>
            
            <button @click.prevent="AcceptCookies" class="bg-white rounded-[10px] px-[20px]">
                <h4 class="text-[#59C8F7]">ตกลง</h4>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cookies from 'js-cookie';

export default defineComponent({
  setup() {
    let alreadyCookies = ref(Cookies.get('AcceptCookies') ?? 'false');

    function AcceptCookies() {
        Cookies.set('AcceptCookies', 'true', { expires: 7 });
        alreadyCookies.value = Cookies.get('AcceptCookies') ?? 'false';
    }

    return {
        AcceptCookies,
        alreadyCookies
    }
  }
});

</script>
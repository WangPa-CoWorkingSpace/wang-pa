<template>
    <Navbar />

    <div class="h-screen main-gardient">
        <div class="pt-[100px] px-[20px]">
            <h1 class="text-[32px]">มารู้จักกันหน่อย!</h1>
            <h1 class="text-[20px]">เราจะสามารถจำคุณได้เมื่อคุณกลับมา</h1>

            <div class="mt-[80px] flex justify-center">
                <h1 class="text-[24px]">เข้าสู่ระบบ</h1>
            </div>
            <center class="mt-[10px] px-[20px]">
                <div class="bg-[#A0DFFA] h-[200px] rounded-[20px] p-4">
                    <button
                        class="bg-white w-full flex justify-center items-center p-[5px] rounded-[20px] border-[1px] border-black/50" @click.prevent="googleLogin()">
                        <NuxtImg src="/img/google_logo.png" width="23px"></NuxtImg>
                        <h4 class="text-[14px] ml-[10px]">ดำเนินการต่อด้วย Google</h4>
                    </button>
                    <div class="h-[1px] w-[70%] bg-black/50 mt-[20px]"></div>
                </div>
            </center>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

    Vue.use(GAuth, gauthOption)
export default defineComponent({
    data() {
    return {
      //Data Out
    };
  },
  setup() {

  },
  methods: {
    
  }
})
</script>
<template>
    <div id="navbar" class="fixed z-40 w-full transition-all duration-[1200ms]" :class="{'bg-[#1cb6d9e5]': pageScroll}">
            <div class="flex justify-between min-h-[60px] items-center px-2 border-1">
                <div>
                    <button class="fas fa-user-circle text-[30px] mt-1 p-2" :class="{'text-white': pageScroll}">
                      
                    </button>
                </div>
                <nav class="items-center gap-[30px] font-normal hidden lg:flex" :class="{'text-white': pageScroll, 'text-black': !pageScroll}">
                    <div>
                        <a href="">Sign up</a>
                    </div>
                    <div>
                        <a href="">Login</a>
                    </div>
                </nav>
                <button class="lg:hidden grid gap-1 mt-1 bg-transparent p-2 select-none" @click.prevent="hamberBTN">
                    <span id="ham1" :class="{'rotate-45 translate-y-[9px]': istoggle == true, 'bg-white': pageScroll}" class="w-6 h-1 bg-black rounded-[10px] transition-all duration-200"></span>
                    <span id="ham2" :class="{'opacity-0': istoggle == true, 'bg-white': pageScroll}" class="w-6 h-1 bg-black rounded-[10px] transition-all duration-200"></span>
                    <span id="ham3" :class="{'-rotate-45 -translate-y-[7px]': istoggle == true, 'bg-white': pageScroll}" class="w-6 h-1 bg-black rounded-[10px] transition-all duration-200"></span>
                </button>
            </div>
            <div id="mobileMenu"
                class="lg:hidden justify-center space-y-2 text-center transition-all duration-200 h-[0px] overflow-hidden" :class="{'text-white': pageScroll, 'text-black': !pageScroll}">
                <div>
                    <a href="">
                        Sign up</a>
                </div>
                <div>
                    <a href="">
                        Login</a>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      istoggle: false as boolean, // Declare searchQuery as a string
      pageScroll: false as boolean,
    };
  },

  methods: {
    async hamberBTN() {
      this.istoggle = !this.istoggle;
    },
    handleScroll(): void {
      const targetHeight = 120; // Set to desired scroll height
      this.pageScroll = window.scrollY >= targetHeight;
    },
  },
  mounted(): void {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>
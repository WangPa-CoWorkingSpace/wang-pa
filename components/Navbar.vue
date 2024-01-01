<template>
    <div id="navbar" class="fixed z-40 w-full transition-all duration-[1200ms]" :class="{'bg-[#1cb6d9e5]': pageScroll, 'bg-black/20': istoggle && !pageScroll}">
            <div class="flex justify-between min-h-[60px] items-center px-2 border-1">
                <div>
                    <button @click.prevent="hamberBTN" class="text-[30px] mt-1 p-2" :class="{'text-white': pageScroll, 'fas fa-user-circle': !user_avatar_CK}">
                      <NuxtImg class="rounded-full w-[30px] border-[1px] border-white" :src="user_avatar_CK || '/'" :class="{'hidden': !user_avatar_CK}"></NuxtImg>
                    </button>
                </div>
                <nav class="items-center gap-[30px] font-normal hidden lg:flex" :class="{'text-white': pageScroll, 'text-black': !pageScroll}">
                  <div>
                      <NuxtLink to="/">Home</NuxtLink>
                    </div>  
                  <div>
                      <NuxtLink :class="{'hidden': user_email_CK || user_avatar_CK || user_full_name_CK}" to="/login">Login</NuxtLink>
                    </div>
                    <div>
                      <NuxtLink @click.prevent="logoutBTN" :class="{'hidden': !user_email_CK || !user_avatar_CK || !user_full_name_CK}">Logout</NuxtLink>
                    </div>
                </nav>
                <button class="lg:hidden grid gap-1 mt-1 bg-transparent p-2 select-none" @click.prevent="hamberBTN">
                    <span id="ham1" :class="{'rotate-45 translate-y-[9px]': istoggle == true, 'bg-white': pageScroll}" class="w-6 h-1 bg-black rounded-[10px] transition-all duration-200"></span>
                    <span id="ham2" :class="{'opacity-0': istoggle == true, 'bg-white': pageScroll}" class="w-6 h-1 bg-black rounded-[10px] transition-all duration-200"></span>
                    <span id="ham3" :class="{'-rotate-45 -translate-y-[7px]': istoggle == true, 'bg-white': pageScroll}" class="w-6 h-1 bg-black rounded-[10px] transition-all duration-200"></span>
                </button>
            </div>
            <div id="mobileMenu"
                class="lg:hidden justify-center space-y-2 text-center transition-all duration-200 overflow-hidden" :class="{'text-white': pageScroll, 'text-black': !pageScroll, 'h-0': !istoggle, 'h-[100px]': istoggle}">
                <div>
                    <NuxtLink @click.prevent="hamberBTN" to="/">
                        Home</NuxtLink>
                </div>
                <div>
                    <NuxtLink @click.prevent="hamberBTN" :class="{'hidden': user_email_CK || user_avatar_CK || user_full_name_CK}" to="/login">
                        Login</NuxtLink>
                </div>
                <div>
                    <NuxtLink @click.prevent="logoutBTN" :class="{'hidden': !user_email_CK || !user_avatar_CK || !user_full_name_CK}">
                        Logout</NuxtLink>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import Cookies from 'js-cookie';

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
    async logoutBTN () {
      this.istoggle = !this.istoggle;

      Cookies.remove('user_full_name');
      Cookies.remove('user_email');
      Cookies.remove('user_avatar');
      window.location.reload();
    }
  },
  mounted(): void {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  },

  setup() {
    //Load Login Session from cookie
    let user_full_name_CK: string = '';
    let user_email_CK: string = '';
    let user_avatar_CK: string = '';

    user_full_name_CK = Cookies.get('user_full_name') as string;
    user_email_CK = Cookies.get('user_email') as string;
    user_avatar_CK = Cookies.get('user_avatar') as string;

    return {
      user_full_name_CK,
      user_email_CK,
      user_avatar_CK,
    }
  }
});
</script>
<template>
    <Navbar />

    <div class="h-screen main-gardient">
        <div class="pt-[100px] px-[20px] lg:px-[90px] lg:pt-[80px]">
            <div class="lg:flex lg:justify-center mr-[90px]">
                <div>
                    <h1 class="text-[32px] lg:text-[45px]">มารู้จักกันหน่อย!</h1>
                    <h1 class="text-[20px] lg:text-[28px]">เราจะสามารถจำคุณได้เมื่อคุณกลับมา</h1>
                </div>
            </div>

            <div class="mt-[80px] flex justify-center lg:mt-[30px]">
                <h1 class="text-[24px] lg:text-[30px]">เข้าสู่ระบบ</h1>
            </div>
            <div class="mt-[10px] justify-center flex">
                <div class="bg-[#A0DFFA] rounded-[20px] p-4 lg:w-[500px]">
                    <div class="flex justify-center">
                        <button
                            class="bg-white w-full flex justify-center items-center p-[5px] rounded-[20px] border-[1px] border-black/50 lg:w-[80%]"
                            :disabled="!isReady || !reCaptcha_success" @click.prevent="() => login()">
                            <NuxtImg loading="eager" src="/img/google_logo.png" width="23px"></NuxtImg>
                            <h4 class="text-[14px] ml-[10px] transition-all duration-200"
                                :class="{ 'text-[#8888]': !reCaptcha_success }">ดำเนินการต่อด้วย Google</h4>
                        </button>
                    </div>
                    <div class="flex justify-center">
                        <div class="h-[1px] w-[70%] bg-black/50 mt-[20px]"></div>
                    </div>
                    <div class="flex justify-center mt-[20px]">
                        <vue-recaptcha class="max-w-[310px]" v-show="showRecaptcha"
                            sitekey="6LehoUIpAAAAAMDXiwm0XdYLlQga69SvUbGzGd1p" size="normal" theme="light" hl="en"
                            :loading-timeout="loadingTimeout" @verify="recaptchaVerified" @expire="recaptchaExpired"
                            @fail="recaptchaFailed" @error="recaptchaError" ref="vueRecaptcha">
                        </vue-recaptcha>
                    </div>
                </div>
            </div>
            <div class="mt-[20px] text-[14px] px-[35px] text-black flex justify-center lg:px-[0]">
                <h4>ในการสร้างบัญชี คุณยอมรับ<NuxtLink class="text-[#1cb7d9] px-1" to="" target="_blank">นโยบายความเป็นส่วนตัว</NuxtLink> และ <NuxtLink class="text-[#1cb7d9] px-1" to="" target="_blank">ข้อตกลงการใช้งาน</NuxtLink>ของเรา</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    useTokenClient,
    type AuthCodeFlowSuccessResponse,
    type AuthCodeFlowErrorResponse,
} from "vue3-google-signin";
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { defineComponent, ref } from 'vue';
import vueRecaptcha from 'vue3-recaptcha2';

export default defineComponent({
    name: 'app',
    components: {
        vueRecaptcha
    },
    data() {
        return {
            showRecaptcha: true,
            loadingTimeout: 120000 // 2mim
        }
    },
    setup() {
        const router = useRouter();

        //If already login
        if (Cookies.get('user_full_name') && Cookies.get('user_email') && Cookies.get('user_avatar')) router.push('/')

        const handleOnSuccess = async (response: AuthCodeFlowSuccessResponse) => {

            //Get user's data
            try {
                const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    },
                });

                if (!userInfoResponse.ok) {
                    alert('Error: Google login not available.');
                }

                const userInfoData = await userInfoResponse.json();

                // Save data to cookies
                Cookies.set('user_full_name', userInfoData.name, { expires: 7 });
                Cookies.set('user_email', userInfoData.email, { expires: 7 });
                Cookies.set('user_avatar', userInfoData.picture, { expires: 7 });

                const userInfoKeepResponse = await fetch('https://wangpa.tensormik.com/wangpa-api/userInfoKeep', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_full_name: userInfoData.name,
                        user_email: userInfoData.email,
                        user_avatar: userInfoData.picture,
                        token: response.access_token
                    })
                });
                const userInfoKeepResponseData = await userInfoKeepResponse.json();
                if (userInfoKeepResponseData.status) router.push('/');
                else alert(userInfoKeepResponseData.message)
            } catch {
                alert('Failure to login or Signup, Please try again later.')
            }
        };

        const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
        };

        const { isReady, login } = useTokenClient({
            onSuccess: handleOnSuccess,
            onError: handleOnError,
            // other options
        });

        //ReCaptcha
        let reCaptcha_success = ref(false);
        return {
            isReady,
            login,

            reCaptcha_success
        }
    },
    methods: {
        async recaptchaVerified(response: string) {
            try {
                const response_reCaptcha = await fetch('https://wangpa.tensormik.com/wangpa-api/recaptchaValidate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        g_recaptcha_response: response
                    })
                });
                let response_reCaptcha_Data = await response_reCaptcha.json()
                if (response_reCaptcha_Data.success) {
                    this.reCaptcha_success = true;
                }
            } catch { }
        },
        recaptchaExpired() {
            //@ts-ignore
            this.$refs.vueRecaptcha.reset();
        },
        recaptchaFailed() {
        },
        recaptchaError(reason: any) {
        }
    }
})
</script>

import Cookies from 'js-cookie';
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async () => {
    if (Cookies.get('user_email')) {
        let userEmail: string | undefined = Cookies.get('user_email');

        try {
            const sessionExpResponse = await fetch('https://wangpa.tensormik.com/wangpa-api/sessionExpCheck', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_email: userEmail
                })
            });
            const sessionExpResponseData = await sessionExpResponse.json();
            if (sessionExpResponseData.exp) {
                Cookies.remove('user_full_name');
                Cookies.remove('user_email');
                Cookies.remove('user_avatar');
            }
        }
        catch {}
    }
});
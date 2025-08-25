import { useCookieStore } from '../stores/cookie';

export function useAnalytics(){
    const cookieStore = useCookieStore();

    const initAnalytics = () => {
        if (cookieStore.consentGiven !== true) return
        if (cookieStore.consentGiven === true) {
            const gtmId = "GTM-MRNQ53VC"
            if(!document.getElementById("gtm-script")) {
                const script = document.createElement("script");
                script.id = "gtm-script";
                script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
                script.async = true;
                document.head.appendChild(script);
            }
        }
    };

    return { initAnalytics };
}
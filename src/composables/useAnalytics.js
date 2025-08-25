import { useCookieStore } from '../stores/cookie';

export function useAnalytics(){
    const cookieStore = useCookieStore();

        const initAnalytics = () => {
        if (cookieStore.consentGiven !== true) return;
        if (!document.getElementById("gtm-script")) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

            const gtmId = "GTM-MRNQ53VC";
            const script = document.createElement("script");
            script.id = "gtm-script";
            script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
            script.async = true;
            document.head.appendChild(script);
        }
        };

        const removeAnalytics = () => {
            const script = document.getElementById('gtm-script');
                if (script) script.remove();
                if (window.dataLayer) window.dataLayer.length = 0;
        };
    return { initAnalytics, removeAnalytics };
}
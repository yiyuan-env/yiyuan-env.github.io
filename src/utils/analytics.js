export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual ID

export const initGA = () => {
    if (window.gtag) return; // Already initialized

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    console.log('Google Analytics initialized');
};

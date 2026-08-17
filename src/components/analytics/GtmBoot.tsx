import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

function isGtmId(value: string): boolean {
  return /^GTM-[A-Z0-9]+$/i.test(value);
}

function isGaId(value: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(value);
}

/**
 * Boots the analytics vendor when an ID is present.
 * CTA events still queue on `window.dataLayer` without a vendor.
 * Do not run A/B copy until a baseline exists in GTM/GA4.
 */
export function GtmBoot() {
  const gtmId = isGtmId(GTM_ID) ? GTM_ID : "";
  const gaId = isGaId(GA_ID) ? GA_ID : "";
  if (!gtmId && !gaId) return null;

  return (
    <>
      <Script id="cta-datalayer" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];`}
      </Script>
      {gtmId ? (
        <>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              className="hidden"
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
      {gaId && !gtmId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}


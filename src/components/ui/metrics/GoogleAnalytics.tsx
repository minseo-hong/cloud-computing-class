import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        id="google-analytics-link"
        src="https://www.googletagmanager.com/gtag/js?id=G-W0VS7MW71Q"
      />
      <Script
        id="google-analytics-code"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W0VS7MW71Q');`,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;

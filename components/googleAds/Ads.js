// components/Ads.js
import { useEffect } from 'react';

const Ads = ({ className, style, adClient, adSlot }) => {
  useEffect(() => {
    const loadAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log('Ads loaded successfully');
      } catch (e) {
        console.error('Error loading Google Ads:', e);
      }
    };

    const checkAdsbygoogle = () => {
      if (window.adsbygoogle) {
        loadAds();
      } else {
        setTimeout(checkAdsbygoogle, 300); // Check every 300ms until adsbygoogle is defined
      }
    };

    checkAdsbygoogle();
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block', ...style }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ads;

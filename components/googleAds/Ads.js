// components/Ad.js
import { useEffect } from 'react';

const Ads = ({ className, style, adClient, adSlot }) => {
    console.log(className, style, adClient, adSlot, "className, style, adClient, adSlot");
  useEffect(() => {
    const loadAds = () => {
      try {
        if (window.adsbygoogle && window.adsbygoogle.loaded) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('Error loading Google Ads:', e);
      }
    };

    if (typeof window !== 'undefined') {
      if (window.adsbygoogle) {
        loadAds();
      } else {
        window.addEventListener('load', loadAds);
        return () => window.removeEventListener('load', loadAds);
      }
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block', ...style }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default Ads;

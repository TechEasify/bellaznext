// components/Ad.js
import { useEffect } from 'react';

const Ads = ({ className, style, adClient, adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log(window.adsbygoogle, "window.adsbygoogle");
    } catch (e) {
      console.error('Error loading Google Ads:', e);
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
    ></ins>
  );
};

export default Ads;

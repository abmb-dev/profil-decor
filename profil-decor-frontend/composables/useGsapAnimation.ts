import gsap from 'gsap';

export default function () {
  
  function initOpacityAnimation(isFadeAway = false) {
    return gsap.timeline().to('#landing-page', { duration: 0.25, ease: "power4", opacity: isFadeAway ? 0 : 1 });
  }

  return {
    initOpacityAnimation
  };
}
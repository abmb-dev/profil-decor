import gsap from 'gsap';
import SplitType from 'split-type';

export default function () {
  function initOpacityAnimation(isFadeAway = false) {
    return gsap.timeline().to('#landing-page', { duration: 0.25, ease: "power4", opacity: isFadeAway ? 0 : 1 });
  }

  function initLandingTimelineAnimation() {
    gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: '#landing-section',
        start: 'center center',
        end: 'bottom+=50% center',
        pin: true,
        markers: false
      }
    });
  }

  function initTextRevealAnimation(target: string) {
    SplitType.create(target);
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.25,
      opacity: 1
    });
  } 

  return {
    initLandingTimelineAnimation,
    initOpacityAnimation,
    initTextRevealAnimation
  };
}
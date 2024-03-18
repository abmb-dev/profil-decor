import gsap from 'gsap';
import SplitType from 'split-type';

export default function () {
  function initOpacityAnimation(isFadeAway = false) {
    return gsap.timeline().to('#landing-page', { duration: 0.25, ease: "power4", opacity: isFadeAway ? 0 : 1 });
  }

  function initCharRevealAnimation(target: string) {
    SplitType.create(target);
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.25,
      opacity: 1
    });
  } 

  function initLineRevealAnimation(target: string) {
    const childSplit = SplitType.create(target, { split: 'lines', lineClass: 'split-child' });

    gsap.from(childSplit.lines, {
      duration: 1.5,
      yPercent: 300,
      ease: 'power4',
      stagger: 0.1
    });
  }

  return {
    initOpacityAnimation,
    initCharRevealAnimation,
    initLineRevealAnimation,
  };
}
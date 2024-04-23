import gsap from 'gsap';
import SplitType from 'split-type';

export default function () {
  function initOpacityAnimation(target: string, isFadeAway = false) {
    return gsap.timeline().to(target, { duration: 0.25, ease: "power4", opacity: isFadeAway ? 0 : 1, visibility: isFadeAway? 'hidden' : 'visible' });
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
    initLineRevealAnimation,
  };
}
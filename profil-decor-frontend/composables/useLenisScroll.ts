import Lenis from '@studio-freight/lenis';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

/**
 * Composable for initializing and retrieving the reference to the Lenis instance
 * @param isScrollDisabled Ref for starting or stopping the lenis scroll
 * @returns 
 */
export default function (isScrollDisabled: Ref<boolean>) {
  let lenis: any = null;

  const getLenisInstance = () => {
    if (!lenis) {
      lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update);
      
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
    return lenis;
  }

  const scrollToSection = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target);
    }
  };

  watchEffect(() => {
    if (lenis) {
      if (toValue(isScrollDisabled)) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  });

  getLenisInstance();

  return {
    getLenisInstance,
    scrollToSection,
  };
};
import Lenis from '@studio-freight/lenis';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

type relativeTarget = 'top' | 'bottom' | 'left' | 'right';
type scrollToTarget = relativeTarget | `#${string}` | `.${string}`;
type scrollToOptions = {
  offset: number,
  duration: number,
  immediate: boolean,
  easing: (_: number) => number
}

/**
 * Composable for initializing and retrieving the reference to the Lenis instance
 * @param isScrollDisabled Ref for starting or stopping the lenis scroll
 */
export default function (isScrollDisabled?: Ref<boolean>) {
  let lenis: any = null;
  const defaultScrollToOptions = {
    offset: 0,
    duration: 2.5,
    immediate: false,
    easing: easingFunction
  };

  function getLenisInstance(): any {
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

  function scrollToSection(target: scrollToTarget, options?: Partial<scrollToOptions>) {
    if (lenis) {
      lenis.scrollTo(target, { ... options ? options : defaultScrollToOptions });
    }
  };

  function easingFunction (time: number) {
    return time < 0.5 ? 4 * Math.pow(time, 3) : 1 - Math.pow(-2 * time + 2, 3) / 2
  }

  watchEffect(() => {
    if (lenis) {
      if (toValue(isScrollDisabled)) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  });

  onUnmounted(() => {
    lenis.destroy();
  });

  getLenisInstance();

  return {
    getLenisInstance,
    scrollToSection,
  };
};
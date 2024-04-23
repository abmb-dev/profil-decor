export default function () {
  const { windowY } = useWindowScroll();

  function getElementYPosition(containerRef: Ref<HTMLElement | undefined>) {
    return containerRef.value ? containerRef.value.getBoundingClientRect().top + document.documentElement.scrollTop : 0;
  }

  function getInitialScaleFactor(containerRef: Ref<HTMLElement | undefined>) {
    return containerRef.value ? containerRef.value.getBoundingClientRect().width / containerRef.value.offsetHeight : 1;
  }

  function updateScaleFactor(containerRef: Ref<HTMLElement | undefined>, scaleFactor: Ref<number>, offset: number = 500, easeFactor: number = 0.1) {
    if (containerRef.value) {
      const elementYPosition = getElementYPosition(containerRef);
      let lastScaling = scaleFactor.value;
      
      if (windowY.value < elementYPosition - offset) {
        scaleFactor.value = 1.20;
      } else if (windowY.value >= elementYPosition - offset && windowY.value <= elementYPosition + 50) {
        scaleFactor.value = 1.20 - (windowY.value / containerRef.value.offsetHeight) * easeFactor;
        lastScaling = scaleFactor.value;
      } else {
        scaleFactor.value = lastScaling;
      }
    }
  }

  return {
    getInitialScaleFactor,
    updateScaleFactor
  };
}
/**
 * Composable for handling the scrolling position on X and Y axes
 * @returns 
 */
export default function () {  
  const offsetY = 25;
  const internalX = ref(process.client ? window.scrollX : 0);
  const internalY = ref(process.client ? window.scrollY : 0);

  const windowX = computed(() => {
    return internalX.value;
  });

  const windowY = computed({
    get() {
      return internalY.value;
    },
    set(newValue) {
      internalY.value = newValue;
    }
  });

  function updateInternalValues(event: any) {
    internalX.value = event.currentTarget.scrollX;
    internalY.value = event.currentTarget.scrollY;
  }

  onMounted(() => window.addEventListener('scroll', updateInternalValues));
  onUnmounted(() => window.removeEventListener('scroll', updateInternalValues));

  return {
      windowX,
      windowY,
      offsetY
  };
}
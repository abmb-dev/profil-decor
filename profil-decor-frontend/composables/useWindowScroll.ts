export default function () {  
  const offsetY = 10;
  const internalX = ref(process.client ? window.scrollX : 0);
  const internalY = ref(process.client ? window.scrollY : 0);

  const windowX = computed(() => {
    return internalX.value;
  });

  const windowY = computed(() => {
    return internalY.value;
  })

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
};
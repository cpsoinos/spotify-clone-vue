export const useImgBgColor = (src: string) => {
  const bgColor = useBgColor()

  const { data: extractedColor } = useFetch('/api/extract-color', {
    params: { src }
  })

  const imgBgColor = computed(() => {
    const [r, g, b] = extractedColor.value
    return `rgba(${r}, ${g}, ${b}, 0.6)`
  })

  onMounted(() => (bgColor.value = imgBgColor.value))

  // watch(imgBgColor, (newValue) => {
  //   bgColor.value = newValue
  // })
  watch(extractedColor, (newValue) => {
    const [r, g, b] = newValue
    // return `rgba(${r}, ${g}, ${b}, 0.6)`
    bgColor.value = `rgba(${r}, ${g}, ${b}, 0.6)`
  })
}

export const useImgBgColor = (src: string) => {
  const { data: extractedColor } = useFetch('/api/extract-color', {
    params: { src }
  })
  const bgColor = computed(() => {
    const [r, g, b] = extractedColor.value
    return `rgba(${r}, ${g}, ${b}, 0.6)`
  })
  return bgColor
}

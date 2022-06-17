import analyze from 'rgbaster'

export const useImageColors = (src: string) => {
  const palette = ref([])
  const derivedColor = ref('#000')

  const getPalette = async () => {
    palette.value = await analyze(src)
    const index = Math.floor(palette.value.length / 3)
    derivedColor.value = palette.value[index].color
  }

  return {
    getPalette,
    palette,
    derivedColor
  }
}

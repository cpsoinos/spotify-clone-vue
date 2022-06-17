import Vibrant from 'node-vibrant'

/**
 * Extracts the color palette from an image, passed as a url query param,
 * and returns the rgb values of the DarkVibrant color.
 */
export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  const src = query.src as string
  const { DarkVibrant } = await Vibrant.from(src).getPalette()
  return DarkVibrant.rgb
})

import Vibrant from 'node-vibrant'

export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  const src = query.src as string
  const { DarkVibrant } = await Vibrant.from(src).getPalette()
  return DarkVibrant.rgb
})

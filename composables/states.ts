export interface Album {
  artist: string
  artwork: string
  title: string
}
export interface Track {
  length: number
  title: string
}

export enum Repeat {
  All = 'all',
  None = 'none',
  One = 'one'
}

export const useCurrentAlbum = () =>
  useState<Album>('currentAlbum', () => ({
    title: 'Synthesis',
    artist: 'Evanescence',
    artwork: 'https://i.scdn.co/image/ab67616d00001e02da80a3f19d59adceff0b96fe'
  }))

export const useCurrentTrack = () =>
  useState<Track>('currentTrack', () => ({
    title: 'The End Of The Dream',
    length: 294
  }))

export const useBgColor = () =>
  useState<string>('bgColor', () => {
    const currentAlbum = useCurrentAlbum()
    const { data: extractedColor } = useFetch('/api/extract-color', {
      params: { src: currentAlbum.value.artwork }
    })
    return computed(() => {
      const [r, g, b] = extractedColor.value
      return `rgba(${r}, ${g}, ${b}, 0.6)`
    })
  })

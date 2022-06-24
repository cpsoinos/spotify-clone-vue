declare module '*.svg' {
  import { VNode } from 'vue'

  // DON'T DECLARE THIS INSIDE GLOBAL MODULE
  type Svg = VNode

  const content: Svg
  export default content
}

declare global {
  interface Window {
    Vibrant?: typeof import('node-vibrant')
  }
}

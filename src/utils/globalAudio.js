// Global audio instance that persists across pages
let globalAudio = null

export const getGlobalAudio = () => {
  return globalAudio
}

export const setGlobalAudio = (audio) => {
  globalAudio = audio
}

export const stopGlobalAudio = () => {
  if (globalAudio) {
    globalAudio.pause()
    globalAudio.currentTime = 0
  }
}

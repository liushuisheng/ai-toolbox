import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Season = 'spring' | 'summer' | 'autumn' | 'winter'

export const useWeatherStore = defineStore('weather', () => {
  const weatherCode = ref<number | null>(null)
  const isDay = ref<number | null>(null)
  const season = ref<Season>('summer')
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  // 根据天气代码判断是否下雨或下雪
  const isRaining = computed(() => {
    if (!weatherCode.value) return false
    return weatherCode.value >= 51 && weatherCode.value <= 67
  })

  const isSnowing = computed(() => {
    if (!weatherCode.value) return false
    return weatherCode.value >= 71 && weatherCode.value <= 86
  })

  function setWeatherData(code: number, day: number) {
    weatherCode.value = code
    isDay.value = day
  }

  function setSeason(currentSeason: Season) {
    season.value = currentSeason
  }

  function setLoading(status: boolean) {
    isLoading.value = status
  }

  function setError(message: string | null) {
    error.value = message
  }

  return {
    weatherCode,
    isDay,
    season,
    isLoading,
    error,
    isRaining,
    isSnowing,
    setWeatherData,
    setSeason,
    setLoading,
    setError,
  }
}) 
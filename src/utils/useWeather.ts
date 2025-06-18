import axios from 'axios'
import { useWeatherStore, type Season } from '@/stores/weather'

export function useWeather() {
  const weatherStore = useWeatherStore()

  // 1. 根据月份判断季节
  const getSeason = (date: Date): Season => {
    const month = date.getMonth() + 1
    if (month >= 3 && month <= 5) return 'spring'
    if (month >= 6 && month <= 8) return 'summer'
    if (month >= 9 && month <= 11) return 'autumn'
    return 'winter'
  }

  // 2. 获取天气数据
  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,is_day`
      const response = await axios.get(apiUrl)
      const { weather_code, is_day } = response.data.current
      weatherStore.setWeatherData(weather_code, is_day)
    } catch (e) {
      weatherStore.setError('无法获取天气信息')
      console.error(e)
    }
  }

  // 3. 初始化
  const init = () => {
    weatherStore.setLoading(true)
    weatherStore.setError(null)
    
    // 设置季节
    weatherStore.setSeason(getSeason(new Date()))

    // 获取地理位置
    if (!navigator.geolocation) {
      weatherStore.setError('您的浏览器不支持地理位置服务')
      weatherStore.setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        await fetchWeather(latitude, longitude)
        weatherStore.setLoading(false)
      },
      (error) => {
        weatherStore.setError('无法获取您的位置，请允许位置访问权限')
        console.error(error)
        weatherStore.setLoading(false)
      }
    )
  }

  return {
    init,
  }
} 
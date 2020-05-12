import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.body.className = ''
    document.body.classList.add(theme)
  }, [setTheme, theme])

  return [theme, setTheme]
}

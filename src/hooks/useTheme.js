import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light Theme')

  useEffect(() => {
    document.body.className = ''
    document.body.classList.add(theme)

    return setTheme
  }, [setTheme, theme])
}

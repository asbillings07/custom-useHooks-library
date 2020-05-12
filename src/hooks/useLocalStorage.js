import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const initial = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.error(`There was an error getting item from local storage`, err)
      return initialValue
    }
  }

  const [storedValue, setValue] = useState(initial)

  const setStorageValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setValue(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (err) {
      console.error('There was an error setting item in local storage', err)
    }
  }

  return [storedValue, setStorageValue]
}

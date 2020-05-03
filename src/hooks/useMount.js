/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

// enables you to run functions in useEffect in class components.
export const useMount = (fn) => {
  useEffect(() => {
    fn()
  }, [])
}
export const useUnMount = (fn) => {
  useEffect(() => {
    // un mount fires on the return
    return () => {
      fn()
    }
  })
}

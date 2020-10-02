import { useRef, useEffect } from 'react'

export const useEffectAfterMount = (cb, dep = []) => {
  const justMounted = useRef(true)

  useEffect(() => {
    if (!justMounted) {
      return cb()
    }
  }, [cb])
}

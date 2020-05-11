import { useState, useRef, useEffect } from 'react'

export const useMeasure = () => {
  const ref = useRef()

  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 0, height: 0 })

  const [resizeObs] = useState(() => new ResizeObserver(([entry]) => setBounds(entry.contentRect)))

  useEffect(() => {
    if (ref.current) resizeObs.observe(ref.current)

    return () => resizeObs.disconnect()
  }, [resizeObs])

  return [{ ref }, bounds]
}

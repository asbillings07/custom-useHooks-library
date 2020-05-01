import { useState } from 'react'

// Use Increment Hook can be used for all sorts of things!!

export const useInc = ({ maxValue = 10000, initialValue = 0, minValue = -10000 }) => {
  const [value, setValue] = useState(initialValue)

  const inc = () => {
    setValue((prevState) => (prevState >= maxValue ? maxValue : prevState + 1))
  }
  const dec = () => {
    setValue((prevState) => (prevState <= minValue ? minValue : prevState - 1))
  }

  const reset = () => setValue(initialValue)

  return [value, { inc, dec, reset }]
}

import { useState } from 'react'

// Use Increment Hook can be used for all sorts of things!!

export const useInc = ({ maxValue = 10000, initialValue = 0, minValue = -10000, step = 0 }) => {
  const [value, setValue] = useState(initialValue)

  const inc = () => {
    setValue((prevState) => {
      if (step > 0 && prevState + step >= maxValue) {
        return maxValue
      } else if (step <= 0) {
        return prevState + 1
      } else {
        return prevState + step
      }
    })
  }
  const dec = () => {
    setValue((prevState) => {
      if (step > 0 && prevState - step <= minValue) {
        return minValue
      } else if (step <= 0) {
        return prevState - 1
      } else {
        return prevState - step
      }
    })
  }

  const reset = () => setValue(initialValue)

  return [value, { inc, dec, reset }]
}

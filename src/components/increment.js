import React from 'react'
import { useInc } from '../hooks/useIncrement'

const Inc = () => {
  const [value, { dec, inc, reset }] = useInc({
    maxValue: 10,
    minValue: 0,
    initialValue: 0
  })

  return (
    <div>
      <button onClick={dec}>-</button>
      {value}
      <button onClick={inc}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Inc

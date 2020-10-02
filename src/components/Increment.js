import React from 'react'
import { useInc } from '../hooks'

export const Increment = () => {
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

      <p>This hook can be used in many ways!</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/2zX2s6d' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

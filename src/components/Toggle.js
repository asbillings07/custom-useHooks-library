import React from 'react'
import { useToggle } from '../hooks'

export const Toggle = () => {
  const { isToggled, toggle } = useToggle(false)

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && (
        <p>
          <strong>Look Ma! I'm toggled!</strong>
        </p>
      )}
      <br />
      <p>This hook can toggle anything you like!</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/3dOeaOS' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

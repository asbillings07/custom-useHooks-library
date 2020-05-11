import React from 'react'
import { useToggle } from '../hooks'
export const Toggle = () => {
  const { isToggled, toggle } = useToggle(false)

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <p>To Be Toggled</p>}
    </div>
  )
}

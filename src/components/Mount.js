import React from 'react'
import { useMount, useUnMount } from '../hooks/useMount'
import { useToggle } from '../hooks/useToggle'
const Mount = () => {
  const { isToggled, toggle } = useToggle()

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <UnMount />}
    </div>
  )
}

const UnMount = () => {
  useMount(() => {
    console.log('I mounted!!!!')
  })
  useUnMount(() => {
    console.log('I unmounted!!')
  })
  return <div>unMount Me!</div>
}

export default Mount

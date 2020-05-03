import React from 'react'
import { Card } from '../Elements'
import black from '../black.png'
import { useHover } from '../hooks/useHover'

const Hover = () => {
  const { bind, isHovered } = useHover()

  return (
    <div>
      <Card {...bind} style={{ background: isHovered ? 'var(--purp)' : 'var(--black)' }}>
        <h3>Some card</h3>
        <img src={black} alt='' />
      </Card>
    </div>
  )
}

export default Hover

import React from 'react'
import { Card } from '../Elements'
import black from '../images/black.png'
import { useHover, useWindowWidth } from '../hooks'

const Hover = () => {
  const { bind, isHovered } = useHover()
  const width = useWindowWidth()

  // console.log('bounds', bounds)

  if (width <= 400) return null

  return (
    <div>
      <Card {...bind} style={{ background: isHovered ? '#9e8fc7' : '#3b2c41' }}>
        <h3>Some card</h3>
        <img src={black} alt='' />
      </Card>

      <p>This hook can help you perform code changes on certain mouse or keyboard actions</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/2ZaR5lo' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

export default Hover

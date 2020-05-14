import React from 'react'
import { Card } from '../Elements'
import { useWindowWidth } from '../hooks'
import Green from '../images/green.png'

const WindowWidth = () => {
  const width = useWindowWidth()

  if (width <= 600)
    return (
      <div>
        <h1>Looks like the card is gone....</h1>
        <p>
          Hmmmm...I wonder where it went? Maybe increase the screen size and you'll get it back?
        </p>
      </div>
    )

  return (
    <div>
      <Card>
        <h3>Some card</h3>
        <img src={Green} alt='' />
      </Card>

      <p>This hook can help you perform code changes when the viewport width changes</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/2zIJ38H' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

export default WindowWidth

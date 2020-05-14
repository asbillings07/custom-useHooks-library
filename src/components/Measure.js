import React from 'react'
import { Card } from '../Elements'
import { useMeasure } from '../hooks'
import Blue from '../images/blue.png'
const Measure = () => {
  const [{ ref }, bounds] = useMeasure()
  return (
    <div>
      <Card ref={ref}>
        <h3>Some card</h3>
        <img src={Blue} alt='' />
      </Card>
      <br />
      <h3>Resize the Card and see how the height and width change with it!</h3>
      <br />
      <p>Left: {bounds.left}</p>
      <p>Top: {bounds.top}</p>
      <p>Width: {bounds.width}</p>
      <p>Height: {bounds.height}</p>

      <p>This hook can help you react to element changes</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/3fZ7nUK' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

export default Measure

import React from 'react'
import { useScript } from '../hooks'

export const Script = () => {
  const [isLoaded, isError] = useScript('https://www.google.com/recaptcha/api.js')
  console.log({ isLoaded, isError })

  if (!isLoaded) return null

  return (
    <div>
      <h3>Script</h3>

      <p>This hook can be used add a script to the page and load it</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/3e9TK3o' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

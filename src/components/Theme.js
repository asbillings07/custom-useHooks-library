import React from 'react'
import { useTheme } from '../hooks'

export const Theme = () => {
  const [theme, setTheme] = useTheme()
  return (
    <div>
      <select name='' id='' defaultValue={theme} onChange={e => setTheme(e.target.value)}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>

      <p>This hook can be used to add a global theme to your webpage, say hello to dark Mode!</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/2ZlvV4p' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

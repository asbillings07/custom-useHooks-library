import React from 'react'
import { useLocalStorage } from '../hooks'

export const LocalStorage = () => {
  const [value, setValue] = useLocalStorage('TEST', 'Initial TESTING the TESt')

  return (
    <div>
      <h1>{value || ''}</h1>
      <input value={value} onChange={e => setValue(e.target.value)} />

      <p>This hook can be used to access and update LocalStorage</p>
      <p>
        check out the source code{' '}
        <a href='https://bit.ly/2Ts08uO' target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </p>
    </div>
  )
}

import React from 'react'
import { useCookie } from '../hooks'

export const Cookie = () => {
  const [cookie, setCookie] = useCookie({ key: 'tester' })

  return (
    <div>
      <h1>You like "{cookie}" cookies</h1>
      <input
        placeholder='enter type of cookie'
        value={cookie}
        onChange={e => setCookie(e.target.value)}
      />
    </div>
  )
}

import { useState, useEffect } from 'react'

export const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    callback(state)
  }, [state, callback])

  return [state, setState]
}

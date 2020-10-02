import { useReducer, useEffect } from 'react'

export const useStateWithCallback = (initialState, reducer, callback) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    callback(state)
  }, [state, callback])

  return [state, dispatch]
}

import { useReducer, useEffect } from 'react'

const reducer = (prevState = {}, updatedState = {}) => {
  return { ...prevState, ...updatedState }
}

export const useSetState = (initialState = {}, callback) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setState = updatedState => dispatch(updatedState)

  useEffect(() => {
    callback(state)
  }, [state, callback])

  return [state, setState]
}

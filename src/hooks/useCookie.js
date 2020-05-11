import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
// export const useCookie = () => {
//   const getCookie = ({ key }) => Cookies.get(key)
//   const setCookie = ({ key, value }) => Cookies.set(key, value)

//   return [getCookie, setCookie]
// }

export const useCookie = ({ key }) => {
  const initalState = Cookies.get(key)
  const [cookie, setStateCookie] = useState(initalState)

  useEffect(() => {
    Cookies.set(key, cookie)
  }, [cookie, key])

  return [cookie, setStateCookie]
}

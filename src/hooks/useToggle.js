import { useState } from 'react'

/*

Rename output, multiple uses of hook, is good if you want to rename them later 
return [isToggled, setToggle, toggle]

Named properties, no order in return 

return { isToggle, setToggle, toggle }

*/
export const useToggle = (initial) => {
  const [isToggled, setToggle] = useState(initial)
  const toggle = () => setToggle((prevState) => !prevState)

  return { isToggled, setToggle, toggle }
}

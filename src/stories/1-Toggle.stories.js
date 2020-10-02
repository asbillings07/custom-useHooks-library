import React from 'react'
import { action } from '@storybook/addon-actions'
import { Toggle, Hover, Measure, WindowWidth } from '../components'

export default {
  title: 'Hooks',
  component: Toggle
}

export const useToogle = () => <Toggle />
export const useHover = () => <Hover />
export const useMeasure = () => <Measure />
export const useWidowWidth = () => <WindowWidth />

useToogle.story = {
  name: 'useToogle'
}

useHover.story = {
  name: 'useHover'
}

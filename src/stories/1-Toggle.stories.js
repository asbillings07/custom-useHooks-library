import React from 'react'
import { action } from '@storybook/addon-actions'
import { Toggle } from '../components/Toggle'
import Hover from '../components/Hover'
import Measure from '../components/Measure'
import WindowWidth from '../components/WindowWidth'

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

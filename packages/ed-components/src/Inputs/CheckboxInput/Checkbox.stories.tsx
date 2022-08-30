import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from './Checkbox'


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const CheckboxInput: ComponentStory<typeof Checkbox> = () => <Checkbox label={'Show my questions only'}/>



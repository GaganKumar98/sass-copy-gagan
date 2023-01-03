import { Button } from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'disabled', 'counter'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>
}

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary',
}
export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'disabled',
  children: 'Disabled',
}
export const Counter = Template.bind({})
Counter.args = {
  variant: 'counter',
  children: 'Counter',
}

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Navbar from './Navbar'

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Primary = Template.bind({})

export const Success = Template.bind({})

Primary.args = {
  // primary: true,
  // label: 'Navbar-Primary',
  color: 'Primary',
}

Success.args = {
  // Success: true,
  // label: 'Navbar-Success',
  color: 'Success',
}

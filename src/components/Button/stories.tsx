import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { ArrowLeft } from '@styled-icons/heroicons-solid/ArrowLeft'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Play Again'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Back',
  icon: <ArrowLeft />
}

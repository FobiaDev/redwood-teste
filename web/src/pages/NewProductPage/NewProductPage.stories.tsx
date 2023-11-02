import type { Meta, StoryObj } from '@storybook/react'

import NewProductPage from './NewProductPage'

const meta: Meta<typeof NewProductPage> = {
  component: NewProductPage,
}

export default meta

type Story = StoryObj<typeof NewProductPage>

export const Primary: Story = {}

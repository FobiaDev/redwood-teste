import { render } from '@redwoodjs/testing/web'

import NewProductPage from './NewProductPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewProductPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewProductPage />)
    }).not.toThrow()
  })
})

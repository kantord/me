import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageHeader from '../PageHeader'

describe('<PageHeader />', () => {
  it('contains name Daniel Kantor', () => {
    render(<PageHeader />)

    expect(screen.getByText(/Dániel Kántor/)).toBeVisible()
  })
})


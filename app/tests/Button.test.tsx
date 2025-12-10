import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Button } from '../components/Button'

describe('Button component', () => {
  test('it toggles text when clicked', async () => {
    render(<Button />)
    
    // Initial text
    const btn = screen.getByText('Not yet clicked')
    expect(btn).toBeInTheDocument()

    // Simulate click
    await userEvent.click(btn)

    // After click
    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })
})

import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App unit tests', () => {
  test('renders heading and button', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Training')
    expect(screen.getByRole('button')).toHaveTextContent('count is 0')
  })

  test('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
  })
})

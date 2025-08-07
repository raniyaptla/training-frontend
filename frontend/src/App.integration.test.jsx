import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('count increases after several clicks', () => {
  render(<App />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 3')
})

test('UI updates after interaction', () => {
  render(<App />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Training')
  expect(button).toHaveTextContent('count is 1')
})

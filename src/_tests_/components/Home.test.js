import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../../components/Home'


test('loads and displays heading', async () => {
  // ARRANGE
  render(<Home/>)

  // ACT
  const pageHeading = await screen.findByText("Mountains")

  // ASSERT
  expect(pageHeading).toBeInTheDocument()
})
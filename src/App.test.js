import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import CardMovie from './components/CardMovie'
import '@testing-library/jest-dom/extend-expect'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const {  } = App.queryAllByLabelText(<App />)
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Should render page correctly', () => {
  // render aplikasi
  test(" Should rendering navbar", () => {
    const { getByText } = render(<App />)
    const brandElement = getByText('Mangane')
    const buttonElement = getByText('Home')
    expect(brandElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })
})

describe('Testing user iteraction', () => {
  const { getByDisplayValue } = render(<CardMovie />)
  const buttonViewDetail = getByDisplayValue (/detail/i)

  fireEvent.change(buttonViewDetail, {
    target: {
      
    }
  })
})
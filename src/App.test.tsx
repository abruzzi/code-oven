import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('Code Oven Application', () => {
  it('renders application heading', () => {
    render(<App/>);
    const heading = screen.getByText('The Code Oven');
    expect(heading).toBeInTheDocument();
  });
})

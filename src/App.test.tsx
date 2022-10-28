import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

xtest('renders files block', () => {
  render(<App />);
  const filesElement = screen.getByText(/Files/i);
  expect(filesElement).toBeInTheDocument();
});

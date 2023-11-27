import React, { render, screen } from '@testing-library/react';
import { Home } from './views/home/Home';

test('renders react component', () => {
    render(<Home />);
    const divElement = screen.getByText(/Main menu/i);
    expect(divElement).toBeInTheDocument();
});

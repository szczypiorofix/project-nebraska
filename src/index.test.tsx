import React, { render, screen } from '@testing-library/react';
import { Admin } from './views/admin/Admin';

test('renders react component', () => {
    render(<Admin />);
    const divElement = screen.getByText(/ADMIN PANEL/i);
    expect(divElement).toBeInTheDocument();
});

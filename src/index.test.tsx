import React, { render, screen } from '@testing-library/react';
import { MainView } from './views/main-view/MainView';

test('renders react component', () => {
    render(<MainView />);
    const divElement = screen.getByText(/MAIN VIEW/i);
    expect(divElement).toBeInTheDocument();
});

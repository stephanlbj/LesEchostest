'use client'

import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';   

describe('Button component', () => {
  
  it('should render with the correct title', () => {
    render(<Button title="Subscribe" />);
    
    const buttonElement = screen.getByText(/Subscribe/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call handleClick when clicked', () => {
    const handleClick = jest.fn();  
    render(<Button title="Subscribe" handleClick={handleClick} />);
    
    const buttonElement = screen.getByText(/Subscribe/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with the correct status "subscribed"', () => {
    render(<Button title="Unsubscribe" status="subscribed" />);
    
    const buttonElement = screen.getByText(/Unsubscribe/i);
    expect(buttonElement).toHaveClass('sc-17df1294-0 grDCvB');  
  });

});

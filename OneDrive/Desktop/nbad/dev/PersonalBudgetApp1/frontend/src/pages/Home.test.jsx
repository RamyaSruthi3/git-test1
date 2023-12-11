import { render } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // importing jest-dom for testing React components (inside it block)

describe('Home component', () => {
  it('renders the Home component with the provided text', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const personalBudgetElement = getByText(/Personal Budget/i);
    const titleElement = getByText(/An efficient personal-budget management app/i);
  

    
    expect(personalBudgetElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  
     
  });
});
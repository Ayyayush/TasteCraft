import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import appStore from '../../utils/appStore';

// Mock the custom hook
jest.mock('../../../utils/useOnlineStatus', () => {
  return jest.fn(() => true);
});

// Mock UserContext
jest.mock('../../../utils/UserContext', () => {
  return {
    __esModule: true,
    default: {
      Provider: ({ children }) => children,
      Consumer: ({ children }) => children({ loggedInUser: 'Test User' })
    }
  };
});

const MockedHeader = () => {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  test('should render Header component with cart items', () => {
    render(<MockedHeader />);
    
    // Check if the header is rendered
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('should have cart with initial count', () => {
    render(<MockedHeader />);
    
    // Check if cart is present (looking for cart emoji or text)
    const cartElement = screen.getByText(/🛒/);
    expect(cartElement).toBeInTheDocument();
  });

  test('should have navigation links', () => {
    render(<MockedHeader />);
    
    // Check for navigation links
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});

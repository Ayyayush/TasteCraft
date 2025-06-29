import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Cart from '../Cart';
import cartSlice, { clearCart } from '../../utils/cartSlice';

// Mock ItemList component
jest.mock('../ItemList', () => {
  return function MockItemList({ items }) {
    return (
      <div data-testid="item-list">
        {items.map((item, index) => (
          <div key={index} data-testid={`cart-item-${index}`}>
            {item.card.info.name || `Item ${index + 1}`}
          </div>
        ))}
      </div>
    );
  };
});

// Helper function to create store with initial state
const createMockStore = (initialState = { items: [] }) => {
  return configureStore({
    reducer: {
      cart: cartSlice
    },
    preloadedState: {
      cart: initialState
    }
  });
};

// Helper component to render Cart with Redux store
const renderCartWithStore = (store) => {
  return render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

describe('Cart Component', () => {
  test('should render cart heading', () => {
    const store = createMockStore();
    renderCartWithStore(store);
    
    const heading = screen.getByRole('heading', { name: /your cart/i });
    expect(heading).toBeInTheDocument();
  });

  test('should show empty cart message when cart is empty', () => {
    const store = createMockStore();
    renderCartWithStore(store);
    
    const emptyMessage = screen.getByText(/your cart is empty. add some delicious items!/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test('should not show clear cart button when cart is empty', () => {
    const store = createMockStore();
    renderCartWithStore(store);
    
    const clearButton = screen.queryByRole('button', { name: /clear cart/i });
    expect(clearButton).not.toBeInTheDocument();
  });

  test('should not show ItemList when cart is empty', () => {
    const store = createMockStore();
    renderCartWithStore(store);
    
    const itemList = screen.queryByTestId('item-list');
    expect(itemList).not.toBeInTheDocument();
  });

  test('should render cart items when cart has items', () => {
    const mockCartItems = [
      { name: 'Pizza', price: 299 },
      { name: 'Burger', price: 199 }
    ];
    
    const store = createMockStore({ items: mockCartItems });
    renderCartWithStore(store);
    
    // Should show ItemList
    const itemList = screen.getByTestId('item-list');
    expect(itemList).toBeInTheDocument();
    
    // Should show items count message
    const itemsMessage = screen.getByText(/items in your cart:/i);
    expect(itemsMessage).toBeInTheDocument();
  });

  test('should show clear cart button when cart has items', () => {
    const mockCartItems = [
      { name: 'Pizza', price: 299 }
    ];
    
    const store = createMockStore({ items: mockCartItems });
    renderCartWithStore(store);
    
    const clearButton = screen.getByRole('button', { name: /clear cart/i });
    expect(clearButton).toBeInTheDocument();
  });

  test('should dispatch clearCart action when clear cart button is clicked', () => {
    const mockCartItems = [
      { name: 'Pizza', price: 299 },
      { name: 'Burger', price: 199 }
    ];
    
    const store = createMockStore({ items: mockCartItems });
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    
    renderCartWithStore(store);
    
    const clearButton = screen.getByRole('button', { name: /clear cart/i });
    fireEvent.click(clearButton);
    
    expect(dispatchSpy).toHaveBeenCalledWith(clearCart());
  });

  test('should clear cart when clear button is clicked', () => {
    const mockCartItems = [
      { name: 'Pizza', price: 299 },
      { name: 'Burger', price: 199 }
    ];
    
    const store = createMockStore({ items: mockCartItems });
    renderCartWithStore(store);
    
    // Initially should show items
    expect(screen.getByTestId('item-list')).toBeInTheDocument();
    expect(screen.getByText(/items in your cart:/i)).toBeInTheDocument();
    
    // Click clear cart
    const clearButton = screen.getByRole('button', { name: /clear cart/i });
    fireEvent.click(clearButton);
    
    // After clearing, should show empty message
    expect(screen.getByText(/your cart is empty. add some delicious items!/i)).toBeInTheDocument();
    expect(screen.queryByTestId('item-list')).not.toBeInTheDocument();
  });

  test('should pass correct props to ItemList component', () => {
    const mockCartItems = [
      { name: 'Pizza', price: 299, id: 1 },
      { name: 'Burger', price: 199, id: 2 }
    ];
    
    const store = createMockStore({ items: mockCartItems });
    renderCartWithStore(store);
    
    const itemList = screen.getByTestId('item-list');
    expect(itemList).toBeInTheDocument();
    
    // Check if cart items are rendered (mocked ItemList shows item names)
    expect(screen.getByTestId('cart-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('cart-item-1')).toBeInTheDocument();
  });

  test('should have proper styling classes', () => {
    const store = createMockStore();
    renderCartWithStore(store);
    
    // Check if main container has correct classes
    const container = screen.getByText(/your cart/i).closest('div');
    expect(container).toHaveClass('cart-container', 'text-center', 'm-4', 'p-4', 'min-h-screen');
  });

  test('should show clear cart button with correct styling when cart has items', () => {
    const mockCartItems = [{ name: 'Pizza', price: 299 }];
    const store = createMockStore({ items: mockCartItems });
    renderCartWithStore(store);
    
    const clearButton = screen.getByRole('button', { name: /clear cart/i });
    expect(clearButton).toHaveClass('p-2', 'm-2', 'bg-red-500', 'text-white', 'rounded-lg');
  });

  test('should handle multiple items in cart correctly', () => {
    const mockCartItems = [
      { name: 'Pizza', price: 299 },
      { name: 'Burger', price: 199 },
      { name: 'Pasta', price: 249 },
      { name: 'Salad', price: 149 }
    ];
    
    const store = createMockStore({ items: mockCartItems });
    renderCartWithStore(store);
    
    // Should render all items
    expect(screen.getByTestId('cart-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('cart-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('cart-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('cart-item-3')).toBeInTheDocument();
    
    // Should show clear button
    expect(screen.getByRole('button', { name: /clear cart/i })).toBeInTheDocument();
  });
});

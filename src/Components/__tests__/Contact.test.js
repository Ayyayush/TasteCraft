import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('should render Contact page heading', () => {
    const heading = screen.getByRole('heading', { name: /contact us/i });
    expect(heading).toBeInTheDocument();
  });

  test('should render all form fields', () => {
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test('should render submit button', () => {
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('should show validation errors for empty form submission', async () => {
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  test('should show email validation error for invalid email', async () => {
    const user = userEvent.setup();
    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    await user.type(emailInput, 'invalid-email');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  test('should show message validation error for short message', async () => {
    const user = userEvent.setup();
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    await user.type(messageInput, 'short');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
    });
  });

  test('should clear validation errors when user starts typing', async () => {
    const user = userEvent.setup();
    const nameInput = screen.getByLabelText(/full name/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    // First, trigger validation error
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });

    // Then type in the field
    await user.type(nameInput, 'John');

    // Error should disappear
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
  });

  test('should submit form successfully with valid data', async () => {
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    // Fill form with valid data
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message with more than 10 characters');

    // Submit form
    fireEvent.click(submitButton);

    // Check for loading state
    await waitFor(() => {
      expect(screen.getByText(/sending.../i)).toBeInTheDocument();
    });

    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/success! your message has been sent successfully/i)).toBeInTheDocument();
    }, { timeout: 2000 });

    // Form should be cleared
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });

  test('should disable submit button during submission', async () => {
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    // Fill form with valid data
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message with more than 10 characters');

    // Submit form
    fireEvent.click(submitButton);

    // Button should be disabled during submission
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  test('should render contact information section', () => {
    expect(screen.getByText(/other ways to reach us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact@tastecraft.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument();
  });

  test('should render form with proper accessibility attributes', () => {
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const messageInput = screen.getByLabelText(/message/i);

    expect(nameInput).toHaveAttribute('id', 'name');
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(messageInput).toHaveAttribute('id', 'message');
    expect(nameInput).toHaveAttribute('name', 'name');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(messageInput).toHaveAttribute('name', 'message');
  });

  test('should handle form input changes correctly', async () => {
    const user = userEvent.setup();
    const nameInput = screen.getByLabelText(/full name/i);

    await user.type(nameInput, 'Test User');
    expect(nameInput.value).toBe('Test User');
  });
});

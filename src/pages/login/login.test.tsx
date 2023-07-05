
import { render, fireEvent, waitFor ,screen} from '@testing-library/react';
import { Login } from './login';

import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login component', () => {
  it('renders login form initially', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <Router>
          <Login navigate={mockNavigate} />
        </Router>
      </Provider>
    );
    
    //expect(getByText('Login')).toBeInTheDocument();
    expect(getByLabelText('Email:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
  });

  it('validates email', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByLabelText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <Login navigate={mockNavigate} />
        </Router>
      </Provider>
    );

    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
   

    fireEvent.change(emailInput, { target: { value: 'notanemail' } });
    //fireEvent.change(passwordInput, { target: { value: 'short' } });

    const loginButton =getByRole("button",{name: /Login/i})
    await fireEvent.click(loginButton);

    const emailErrorElement = await screen.findByText(
        "Please enter valid email !"
      );
      expect(emailErrorElement).toBeInTheDocument();
    
  });

  it('validates password', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByLabelText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <Login navigate={mockNavigate} />
        </Router>
      </Provider>
    );

    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
   

    fireEvent.change(emailInput, { target: { value: 'naveen@gmail.com' } });
    //fireEvent.change(passwordInput, { target: { value: 'shot' } });

    const loginButton =getByRole("button",{name: /Login/i})
    await fireEvent.click(loginButton);

    const errorElement = await screen.findByText(
        "Please enter valid password !"
      );
      expect(errorElement).toBeInTheDocument();
    
  });


  it('should login successfully on valid credentials', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByLabelText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <Login navigate={mockNavigate} />
        </Router>
      </Provider>
    );

    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
   

    fireEvent.change(emailInput, { target: { value: 'naveen@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Pass!1qwa' } });

    const loginButton =getByRole("button",{name: /Login/i})
    await fireEvent.click(loginButton);

    const successElement = await screen.findByText(
        "Login Successful !"
      );
      expect(successElement).toBeInTheDocument();
    
  });

  it('validates confirm password', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByLabelText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <Login navigate={mockNavigate} />
        </Router>
      </Provider>
    );


    const registerlink =getByText("Register User")
    await fireEvent.click(registerlink);


    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const confirmpasswordInput = getByLabelText('Confirm Password:');
   

    fireEvent.change(emailInput, { target: { value: 'naveen@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'pwd@1234' } });

    const loginButton =getByRole("button",{name: /Register/i})
    await fireEvent.click(loginButton);
    
    const errorElement = await screen.findByText(
        "Please re enter same password !"
      );
      expect(errorElement).toBeInTheDocument();
    
  });
});

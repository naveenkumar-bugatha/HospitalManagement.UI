import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Component', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>);
    });
});

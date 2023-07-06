
import { render, fireEvent, waitFor ,screen} from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Dashboard } from './dashboard';

describe('Dashboard component', () => {
    it('renders Dashboard initially', async () => {
        const mockNavigate = jest.fn();
        const { getByText, getByLabelText } = render(
            <Provider store={store}>
                <Router>
                    <Dashboard navigate={mockNavigate} />
                </Router>
            </Provider>
        );
        const dashboardHeader = await screen.findByText(
            'List of Patients'
        );
        expect(dashboardHeader).toBeInTheDocument();
    });
});

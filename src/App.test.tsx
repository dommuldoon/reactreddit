// app.test.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

let store = mockStore({
	data: {
		items: { id: '1', name: 'subreddit' },
	},
});

test('full app rendering/navigating', () => {
	const history = createMemoryHistory();
	const { container, getByTestId } = render(
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>
	);

	expect(container.innerHTML).toMatch('Home');

	fireEvent.click(getByTestId('home-link'));

	expect(container.innerHTML).toMatch('Home');
});

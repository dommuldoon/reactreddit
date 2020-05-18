import Home from './';
import React, { useState } from 'react';
import { render, fireEvent, getByTestId, getByLabelText, getByDisplayValue, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

let store = mockStore({
	data: {
		items: { id: '1', name: 'subreddit' },
	},
});

describe('Home Component', () => {
	const comp = render(
		<Provider store={store}>
			<Home />
		</Provider>
	);

	it('renders', () => {
		const title = comp.getByText(/Subreddit/i);
		expect(title).toBeInTheDocument();
		expect(comp.container.firstChild).toMatchSnapshot();
	});

	it('should call onChange prop with value', async () => {
		const changeQuery = jest.fn();
		render(
			<input
				type="text"
				className="form-control"
				placeholder="subreddit"
				aria-label="subreddit"
				onChange={changeQuery}
			/>
		);
		const input: HTMLElement = comp.getByLabelText('subreddit');
		fireEvent.change(input, { target: { value: '23' } });
		expect(changeQuery).toBeCalled();
		expect(input.value).toBe('23');
	});
});

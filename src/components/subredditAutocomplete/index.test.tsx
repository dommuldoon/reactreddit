import SubredditAutocomplete from './';
import React, { useState } from 'react';
import { render, fireEvent, getByTestId, getByLabelText, getByDisplayValue, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('SubredditAutocomplete Component', () => {
	it('renders', () => {});
});

import { combineReducers } from 'redux';

import data from './data';
import subreddit from './subreddit';

export default combineReducers({
	data,
	subreddit,
});

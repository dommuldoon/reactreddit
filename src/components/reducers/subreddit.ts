import { REQUEST_SUBREDDIT, RECEIVE_SUBREDDIT } from '../actions';

export default (state = {}, { type, subreddit }: { [key: string]: any }) => {
	switch (type) {
		case REQUEST_SUBREDDIT:
			return {
				...state,
				loading: true,
				error: null,
				subreddit: null,
			};
		case RECEIVE_SUBREDDIT:
			return {
				...state,
				loading: false,
				subreddit: subreddit,
			};
		default:
			return state;
	}
};

export const selectSubreddit = (state: { subreddit: { subreddit: any } }) => {
	return state.subreddit.subreddit;
};

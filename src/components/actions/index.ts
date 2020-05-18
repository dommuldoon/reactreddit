export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const REQUEST_SUBREDDIT = 'REQUEST_SUBREDDIT';
export const RECEIVE_SUBREDDIT = 'RECEIVE_SUBREDDIT';

export interface requestApiDataAction {
	type: typeof REQUEST_API_DATA;
	q: string;
}

export interface requestSubredditAction {
	type: typeof REQUEST_SUBREDDIT;
	q: string;
}

export interface requestApiDataPayload {
	q: string;
}
export const requestApiData = (q: string): requestApiDataAction => ({
	type: REQUEST_API_DATA,
	q,
});

export const receiveApiData = (data: any[]) => ({
	type: RECEIVE_API_DATA,
	data,
});

export const requestSubreddit = (q: string): requestSubredditAction => ({
	type: REQUEST_SUBREDDIT,
	q,
});

export const receiveSubreddit = (subreddit: any[]) => ({
	type: RECEIVE_SUBREDDIT,
	subreddit,
});

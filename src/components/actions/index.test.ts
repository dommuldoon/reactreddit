import * as actions from '.';

describe('actions', () => {
	it('should create an action to request api data', () => {
		const q = 'Some param';
		const expectedAction = {
			type: actions.REQUEST_API_DATA,
			q,
		};
		expect(actions.requestApiData(q)).toEqual(expectedAction);
	});
	it('should create an action to recieve api data', () => {
		const data = [{ id: 1, name: 'Some data', description: 'A desc' }];
		const expectedAction = {
			type: actions.RECEIVE_API_DATA,
			data,
		};
		expect(actions.receiveApiData(data)).toEqual(expectedAction);
	});
	it('should create an action to request tweets', () => {
		const q = 'Some param';
		const expectedAction = {
			type: actions.REQUEST_SUBREDDIT,
			q,
		};
		expect(actions.requestSubreddit(q)).toEqual(expectedAction);
	});
	it('should create an action to recieve tweets', () => {
		const subreddit = [{ id: 1, text: 'A tweet' }];
		const expectedAction = {
			type: actions.RECEIVE_SUBREDDIT,
			subreddit,
		};
		expect(actions.receiveSubreddit(subreddit)).toEqual(expectedAction);
	});
});

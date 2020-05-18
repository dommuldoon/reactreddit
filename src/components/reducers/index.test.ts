import reducers from './index';

test('reducers', () => {
	let state;
	state = reducers(undefined, {});
	expect(state).toEqual({ data: {}, subreddit: {} });
});

test('reducers REQUEST_API_DATA', () => {
	let state;
	state = reducers({ data: {}, subreddit: {} }, { type: 'REQUEST_API_DATA', q: 'r' });
	expect(state).toEqual({ data: { loading: true, error: null, items: null }, subreddit: {} });
});

test('reducers RECEIVE_API_DATA', () => {
	let state;
	state = reducers(
		{
			data: { loading: true, error: null },
			subreddit: {},
		},
		{
			type: 'RECEIVE_API_DATA',
			data: [
				{
					id: 1,
					name: 'react',
					description:
						'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
				},
			],
		}
	);

	expect(state).toEqual({
		data: {
			loading: false,
			error: null,
			items: [
				{
					id: 1,
					name: 'react',
					description:
						'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
				},
			],
		},
		subreddit: {},
	});
});

test('reducers REQUEST_SUBREDDIT', () => {
	let state;
	state = reducers(
		{
			data: {
				loading: false,
				error: null,
				items: [
					{
						id: 1,
						name: 'react',
						description:
							'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
					},
				],
			},
			subreddit: {},
		},
		{ type: 'REQUEST_SUBREDDIT', q: 'react' }
	);

	expect(state).toEqual({
		data: {
			loading: false,
			error: null,
			items: [
				{
					id: 1,
					name: 'react',
					description:
						'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
				},
			],
		},
		subreddit: { loading: true, error: null, subreddit: null },
	});
});

test('reducers RECEIVE_SUBREDDIT', () => {
	let state;
	state = reducers(
		{
			data: {
				loading: false,
				error: null,
				items: [
					{
						id: 1,
						name: 'react',
						description:
							'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
					},
				],
			},
			subreddit: { loading: true, error: null },
		},
		{
			type: 'RECEIVE_SUBREDDIT',
			subreddit: [
				{
					id: 1140940163444613100,
					text:
						'RT @JesseRWeigel: I am live streaming now on the @freeCodeCamp YouTube channel!\n\nToday I am getting the freeCodeCamp lessons running locall…',
				},
			],
		}
	);

	expect(state).toEqual({
		data: {
			loading: false,
			error: null,
			items: [
				{
					id: 1,
					name: 'react',
					description:
						'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
				},
			],
		},
		subreddit: {
			loading: false,
			error: null,
			subreddit: [
				{
					id: 1140940163444613100,
					text:
						'RT @JesseRWeigel: I am live streaming now on the @freeCodeCamp YouTube channel!\n\nToday I am getting the freeCodeCamp lessons running locall…',
				},
			],
		},
	});
});

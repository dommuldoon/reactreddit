import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { requestApiData } from '../actions';
import { selectItems } from '../reducers/data';
import SubredditAutocomplete from '../subredditAutocomplete';

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	const [q, setQ] = useState('');
	const [acOpen, setAcOpen] = useState(false);
	const dispatch = useDispatch();
	const items = useSelector(selectItems, shallowEqual);

	const changeQuery = (event: { target: { value: string } }) => {
		setQ(event.target.value);
		if (event.target.value) {
			setAcOpen(true);
			dispatch(requestApiData('subreddit/api/subreddit_autocomplete.json?query=' + event.target.value));
		} else {
			setAcOpen(false);
		}
	};
	const handleAcClick = () => {
		setAcOpen(false);
	};

	return (
		<>
			<h1>Search Subreddits</h1>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="subreddit"
					aria-label="subreddit"
					value={q}
					onChange={changeQuery}
				/>
			</div>
			{acOpen && q ? <SubredditAutocomplete data={items} onClick={handleAcClick} /> : null}
		</>
	);
};

export default Home;

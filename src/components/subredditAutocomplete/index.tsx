import React from 'react';
import { Link } from 'react-router-dom';

export interface SubredditAutocompleteProps {
	data: any[];
	onClick: any;
}

const SubredditAutocomplete: React.SFC<SubredditAutocompleteProps> = (props) => {
	const raisesubredditClick = (param: string) => {
		props.onClick(param);
	};
	return (
		<ul className={'list-group ac'}>
			{props.data ? (
				props.data.map((subreddit) => {
					return (
						<li
							className={'list-group-item list-group-item-action'}
							key={subreddit.id}
							onClick={() => raisesubredditClick(subreddit.name)}
						>
							<Link to={`subreddit/${subreddit.name}`}>{subreddit.name}</Link>
						</li>
					);
				})
			) : (
				<li className={'list-group-item d-flex align-items-center'}>
					Loading <span className="spinner-border ml-5"></span>
				</li>
			)}
		</ul>
	);
};

export default SubredditAutocomplete;

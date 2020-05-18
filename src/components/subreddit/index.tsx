import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { requestSubreddit } from '../actions';
import { selectSubreddit } from '../reducers/subreddit';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export interface SubredditProps {
	match: { params: { id: any } };
}

const Subreddit: React.SFC<SubredditProps> = (props) => {
	const [count, setCount] = useState(10);
	const subId = props.match.params.id;
	const dispatch = useDispatch();
	const subreddit = useSelector(selectSubreddit, shallowEqual);
	const limit = 10;

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(requestSubreddit(`${subId}.json?limit=${limit}`));
		// eslint-disable-next-line
	}, []);

	const next = (after: string) => {
		if (after) {
			window.scrollTo(0, 0);
			setCount(count + 10);
			dispatch(requestSubreddit(`${subId}.json?after=${after}&limit=${limit}&count=${count + 10}`));
		}
	};
	const prev = (before: string) => {
		if (before) {
			window.scrollTo(0, 0);
			setCount(count - 10);
			dispatch(requestSubreddit(`${subId}.json?before=${before}&limit=${limit}&count=${count - 10}`));
		}
	};

	return (
		<>
			<div className="row justify-content-between pl-4 pr-4 pb-2">
				Subreddit: {subId}
				<Link to={'/home'}>Back to search</Link>
			</div>

			<div className="list-group">
				{!subreddit && (
					<li className={'list-group-item d-flex align-items-center'}>
						Loading <span className="spinner-border ml-5"></span>
					</li>
				)}
				{subreddit &&
					subreddit.children.map((sub: any) => (
						<a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1">{sub.data.title}</h5>
							</div>
							<img src={sub.data.thumbnail} />
							<p className="mb-1">{sub.data.selftext}</p>
							<small>
								<i className="fa fa-user mr-1"></i>
								{sub.data.author}
								<i className="fa fa-clock-o ml-2 mr-1"></i>
								{format(fromUnixTime(sub.data.created_utc), 'dd/MM/yyyy')}
							</small>
						</a>
					))}
			</div>
			{subreddit && (
				<nav aria-label="Page navigation example ">
					<ul className="pagination mt-2 justify-content-between">
						<li
							className={classNames('page-item ', { disabled: !subreddit.before })}
							onClick={() => prev(subreddit.before)}
						>
							<span className={'page-link'}>Previous</span>
						</li>

						<li
							className={classNames('page-item ', { disabled: !subreddit.after })}
							onClick={() => next(subreddit.after)}
						>
							<span className={'page-link'}>Next</span>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default Subreddit;

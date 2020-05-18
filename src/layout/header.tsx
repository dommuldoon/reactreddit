import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a className="navbar-brand" href="#">
				ReactReddit
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/home" data-testid="home-link">
							Home<span className="sr-only">(current)</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;

import React from 'react';
import {Link} from 'react-router-dom';
import {links} from './links';

const Header = () => {
	return (
		<nav className="bg-pink-800 border-gray-200">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div
					 className="flex items-center space-x-2">
					<Link to={'/'} className="text-3xl rounded-full py-2 px-4 bg-pink-200 text-pink-700 font-bold transition-transform duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 focus:shadow-lg focus:outline-none">
					  HOME
					</Link>
				</div>
				<div className="flex-grow flex items-center justify-center space-x-4 md:w-auto">
					{links.map((link, index) => (
						<Link
							key={index}
							to={link.path}
							className="text-pink-200 font-bold rounded-full py-2 px-4 hover:bg-pink-600 focus:outline-none focus:ring focus:border-white-200 transition">
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</nav>

	);
};

export default Header;
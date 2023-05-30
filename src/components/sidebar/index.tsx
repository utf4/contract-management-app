import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
	return (
		<div className='h-100 bg-indigo-900 text-white w-280'>
			<div className='p-4'>
				<nav>
					<ul className='space-y-2'>
						<li>
							<Link to='/' className='block p-3 rounded hover:bg-indigo-800'>
								Contact
							</Link>
						</li>
						<li>
							<Link
								to='/charts-and-maps'
								className='block p-3 rounded hover:bg-indigo-800'
							>
								Charts And Maps
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;

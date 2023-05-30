import React from 'react';
import LineGraph from './LineGraph';
import LeafLetGraph from './LeafLetGraph';

const Sidebar: React.FC = () => {
	return (
		<div className='h-screen'>
			<h2 className='font-bold text-xl pt-3'>Charts And Maps</h2>
			<LineGraph />
			<LeafLetGraph />
		</div>
	);
};

export default Sidebar;

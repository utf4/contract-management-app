import React from 'react';
import Sidebar from './components/sidebar';
import Contacts from './components/contacts';
import Charts from './components/charts';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='flex'>
			<div className='flex'>
				<Sidebar />
			</div>
			<div style={{ width: '100%', padding: '50px' }}>
				<Routes>
					<Route path='/' element={<Contacts />} />
					<Route path='/charts-and-maps' element={<Charts />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

import React, { useState } from 'react';
import UsersList from './UsersLlist';
import { User } from '../../interfaces/UserInterface';
import ContactForm from './ContactForm';

const Contacts: React.FC = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div style={{ width: '100%' }}>
			<div className='flex justify-between'>
				<h2 className='font-bold text-xl pt-3'>Contacts List</h2>
				<button
					type='submit'
					className='bg-indigo-500 text-white mb-5 px-4 py-2 rounded-md hover:bg-indigo-600'
					onClick={() => setOpenModal(true)}
				>
					Create New User
				</button>
			</div>
			<UsersList
				users={[]}
				onDelete={function (id: number): void {
					throw new Error('Function not implemented.');
				}}
				onUpdate={function (user: User): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<ContactForm
				openModal={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
			/>
		</div>
	);
};

export default Contacts;

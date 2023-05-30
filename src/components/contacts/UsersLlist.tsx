import React, { useState } from 'react';
import { User } from '../../interfaces/UserInterface';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions/contact.action';
import ContactForm from './ContactForm';

interface TableProps {
	users: User[];
	onDelete: (id: number) => void;
	onUpdate: (user: User) => void;
}

const Table: React.FC<TableProps> = () => {
	const dispatch = useDispatch();

	const { usersList } = useSelector((state: any) => state.usersList);

	const [updateModal, setUpdateModal] = useState<boolean>(false);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	const handleEdit = (user: User) => {
		setSelectedUser(user);
		setUpdateModal(true);
	};

	const handleDelete = (userid: number | string) => {
		dispatch(deleteContact(userid));
	};

	return (
		<>
			<table className='w-full bg-white shadow-md rounded'>
				<thead>
					<tr>
						<th className='py-3 px-4 bg-indigo-500 text-white font-bold'>ID</th>
						<th className='py-3 px-4 bg-indigo-500 text-white font-bold'>
							Name
						</th>
						<th className='py-3 px-4 bg-indigo-500 text-white font-bold'>
							Email
						</th>
						<th className='py-3 px-4 bg-indigo-500 text-white font-bold'>
							Martial Status
						</th>
						<th className='py-3 px-4 bg-indigo-500 text-white font-bold'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{usersList.map((user: User) => (
						<tr key={user.id}>
							<td className='py-2 px-4'>{user.id}</td>
							<td className='py-2 px-4'>{user.name}</td>
							<td className='py-2 px-4'>{user.email}</td>
							<td className='py-2 px-4'>{user.martialStatus}</td>
							<td className='py-2 px-4'>
								<button
									className='bg-blue-500 text-white px-3 py-1 rounded-md mr-2'
									onClick={() => handleEdit(user)}
								>
									Edit
								</button>
								<button
									className='bg-red-500 text-white px-3 py-1 rounded-md'
									onClick={() => handleDelete(user.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ContactForm
				openModal={updateModal}
				onClose={() => {
					setUpdateModal(false);
				}}
				user={selectedUser}
			/>
		</>
	);
};

export default Table;

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { FormData, User } from '../../interfaces/UserInterface';
import { useDispatch } from 'react-redux';
import {
	createContact,
	updateContact,
} from '../../redux/actions/contact.action';

interface ContactFormProps {
	onClose: () => void;
	openModal: boolean;
	user?: User | null;
}

const ContactForm: React.FC<ContactFormProps> = ({
	openModal,
	onClose,
	user,
}) => {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState<FormData>({
		name: user?.name || '',
		email: user?.email || '',
		martialStatus: user?.martialStatus || '',
	});

	const { name, email, martialStatus } = formData;

	useEffect(() => {
		if (user) {
			setFormData({
				name: user.name,
				email: user.email,
				martialStatus: user.martialStatus,
			});
		}
	}, [user]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform form submission or validation logic here
		// Reset form fields
		if (user) {
			const updatedData = { id: user.id, ...formData };
			dispatch(updateContact(updatedData));
		} else {
			dispatch(createContact(formData));
		}

		setFormData({ name: '', email: '', martialStatus: '' });
		onClose();
	};
	if (!openModal) return null;
	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='max-w-md bg-white shadow-md rounded px-8 py-6 w-500'>
				<h2 className='text-2xl font-bold mb-6'>Contact Us</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='name'
							className='block text-gray-700 text-sm font-bold mb-2'
						>
							Name:
						</label>
						<input
							id='name'
							type='text'
							name='name'
							value={name}
							onChange={handleChange}
							placeholder='Enter your name'
							className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-gray-700 text-sm font-bold mb-2'
						>
							Email:
						</label>
						<input
							id='email'
							type='email'
							name='email'
							value={email}
							onChange={handleChange}
							placeholder='Enter your email'
							className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
							required
						/>
					</div>
					<div className='mb-4'>
						<span className='block text-gray-700 text-sm font-bold mb-2'>
							Martial Status:
						</span>
						<label htmlFor='single' className='mr-4'>
							<input
								id='single'
								type='radio'
								name='martialStatus'
								value='single'
								checked={martialStatus === 'single'}
								onChange={handleChange}
								className='mr-1'
								required
							/>
							Single
						</label>
						<label htmlFor='married'>
							<input
								id='married'
								type='radio'
								name='martialStatus'
								value='married'
								checked={martialStatus === 'married'}
								onChange={handleChange}
								className='mr-1'
								required
							/>
							Married
						</label>
					</div>
					<div className='flex justify-end'>
						<button
							type='submit'
							className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600'
						>
							Submit
						</button>
						<button
							type='button'
							className='bg-gray-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-gray-600'
							onClick={onClose}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;

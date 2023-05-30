import { Reducer } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../Types';
import { User } from '../../interfaces/UserInterface';

const initialState = {
	usersList: [],
};

const contactReducer: Reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_CONTACT:
			const newUserContact = {
				id: uuidv4(), // Generate a unique ID using uuidv4()
				...action.payload,
			};
			return {
				...state,
				usersList: [...state.usersList, newUserContact],
			};
		case UPDATE_CONTACT:
			return {
				...state,
				usersList: state.usersList.map((contact: User) =>
					contact.id === action.payload.id
						? { ...contact, ...action.payload }
						: contact
				),
			};
		case DELETE_CONTACT:
			return {
				...state,
				usersList: state.usersList.filter(
					(contact: User) => contact.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default contactReducer;

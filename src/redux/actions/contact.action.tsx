import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../Types';
import { FormData, User } from '../../interfaces/UserInterface';

export const createContact = (data: FormData) => {
	return {
		type: CREATE_CONTACT,
		payload: data,
	};
};

export const updateContact = (data: User) => {
	return {
		type: UPDATE_CONTACT,
		payload: data,
	};
};

export const deleteContact = (id: string | number) => {
	return {
		type: DELETE_CONTACT,
		payload: id,
	};
};

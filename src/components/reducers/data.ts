import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../actions';

export default (state = {}, { type, data }: { [key: string]: any }) => {
	switch (type) {
		case REQUEST_API_DATA:
			return {
				...state,
				loading: true,
				error: null,
				items: null,
			};
		case RECEIVE_API_DATA:
			return {
				...state,
				loading: false,
				items: data,
			};
		default:
			return state;
	}
};

export const selectItems = (state: { data: { items: any } }) => {
	return state.data.items;
};

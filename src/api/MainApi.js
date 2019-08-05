import { GET_SEARCH_URL } from '../constants/urls/urls';

export const MainApi = {
	fetchSearchResults: (inputValue) => (
		fetch(GET_SEARCH_URL(inputValue)).then(response => response.json())
			.then(data => data)
			.catch(e => e)
	),
};

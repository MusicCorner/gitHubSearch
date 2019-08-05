import { SOME_URL } from '../constants/urls/urls';

export const MainApi = {
	fetchSomething: () => (
		fetch(SOME_URL).then(response => response.json())
			.then(data => data)
			.catch(e => e)
	),
};

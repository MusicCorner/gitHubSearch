const MAIN_URL = 'http://api.github.com/search/repositories?q';
export const GET_SEARCH_URL = (inputValue) => `${MAIN_URL}=${inputValue}`;

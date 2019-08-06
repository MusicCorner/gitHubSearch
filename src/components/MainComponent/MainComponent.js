// @flow

import React from 'react';
import { APP_NAME } from '../../constants/common/common';
import styles from './MainComponent.css';
import Header from '../Header/Header';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import SearchForm from '../SearchForm/SearchForm';
import ResultsComponent from '../ ResultsComponent/ResultsComponent';

const MainComponent = () => {
	const SearchFormComponent = SearchContainer(SearchForm);
	const Results = SearchContainer(ResultsComponent);

	return (
		<div className={styles.mainContainer}>
			<Header title={APP_NAME} />
			<SearchFormComponent />
			<Results />
		</div>
	);
};

export default MainComponent;

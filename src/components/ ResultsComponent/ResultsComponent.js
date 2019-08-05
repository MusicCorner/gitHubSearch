import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem/ResultItem';
import styles from './ResultsComponent.css';
import Loader from '../common/Loader/Loader';

const ResultsComponent = (props) => {
	const { searchState } = props;
	const { results } = searchState;
	const { isPending, data } = results;
	if (isPending) {
		return (
			<Loader />
		);
	}

	if (!data.items) {
		return null;
	}

	const mappedResults = (data.items.map(resultItem => (
		<ResultItem key={resultItem.id} result={resultItem} />
	)));

	return (
		<div className={styles.resultsContainer}>
			{mappedResults}
		</div>
	);
};

ResultsComponent.propTypes = {
	searchState: PropTypes.object.isRequired,
};

export default ResultsComponent;

// @flow

/* eslint-disable camelcase */
import React from 'react';
import ResultItem from './ResultItem/ResultItem';
import styles from './ResultsComponent.css';
import Loader from '../common/Loader/Loader';

type ResultItemType = {
	id: React$Key,
	full_name: String,
	svn_url: String,
	stargazers_count: Number,
	watchers_count: Number,
};

type DataType = { items: ResultItemType[], total_count: any };
type ResultsType = { isPending: Boolean, data: DataType};
type Props = { searchState: { results: ResultsType } };


const ResultsComponent = (props: Props) => {
	const { searchState } = props;
	const { results } = searchState;
	const { isPending, data } = results;
	const { items, total_count } = data;

	if (isPending) {
		return (
			<Loader />
		);
	}

	if (!data.items) {
		return null;
	}

	const mappedResults = (items.map((resultItem: ResultItemType) => (
		<ResultItem key={resultItem.id} result={resultItem} />
	)));

	return (
		<>
			<div className={styles.resultsCountContainer}>
				<div className={styles.resultsCount}>
					{total_count} results
				</div>
			</div>
			<div className={styles.resultsContainer}>
				<div>
					{mappedResults}
				</div>
			</div>
		</>
	);
};

export default ResultsComponent;

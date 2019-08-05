/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultItem.css';

const ResultItem = (props) => {
	const { result } = props;
	// console.log(result);
	const { name, svn_url, stargazers_count, watchers_count } = result;

	return (
		<a href={svn_url}>
			<div className={styles.resultItemContainer}>
				{name}
				{stargazers_count}
				{watchers_count}
			</div>
		</a>
	);
};

ResultItem.propTypes = {
	result: PropTypes.object.isRequired,
};

export default ResultItem;

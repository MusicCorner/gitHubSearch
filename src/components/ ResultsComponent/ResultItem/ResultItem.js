/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultItem.css';
import WatchersIcon from '../../common/Icons/WatchersIcon';
import StarIcon from '../../common/Icons/StarIcon';

const ResultItem = (props) => {
	const { result } = props;
	const { full_name, svn_url, stargazers_count, watchers_count } = result;

	return (
		<div className={styles.resultItemContainer}>
			<a href={svn_url}>{full_name}</a>
			<div className={styles.resultItemColumn}>
				<div className={styles.resultInfoItem}>
					<span>
						{watchers_count}
					</span>
					<WatchersIcon />
				</div>
				<div className={styles.resultInfoItem}>
					<span>
						{stargazers_count}
					</span>
					<StarIcon />
				</div>
			</div>
		</div>
	);
};

ResultItem.propTypes = {
	result: PropTypes.object.isRequired,
};

export default ResultItem;

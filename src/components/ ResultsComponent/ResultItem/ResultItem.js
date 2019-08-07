//  @flow

/* eslint-disable camelcase */
import React from 'react';
import styles from './ResultItem.css';
import WatchersIcon from '../../common/Icons/WatchersIcon';
import StarIcon from '../../common/Icons/StarIcon';

type Result = {
	full_name: any,
	svn_url: String,
	stargazers_count: any,
	watchers_count: any,
};

const ResultItem = (props: { result: Result }) => {
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

export default ResultItem;

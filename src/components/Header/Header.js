// @flow

import React from 'react';
import styles from './Header.css';

type Props = {
	title: String,
};

const Header = (props: Props) => {
	const { title } = props;

	return (
		<div className={styles.headerContainer}>
			{title}
		</div>
	);
};

export default Header;

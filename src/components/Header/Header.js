// @flow

import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;

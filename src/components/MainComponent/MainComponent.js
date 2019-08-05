import React from 'react';
import { APP_NAME } from '../../constants/common/common';
import styles from './MainComponent.css';

const MainComponent = () => {
	return (
		<div className={styles.mainContainer}>
			{APP_NAME}
		</div>
	);
};

export default MainComponent;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';

export default class SearchForm extends React.Component {
	static propTypes = {
		searchState: PropTypes.object.isRequired,
		onChangeInputValue: PropTypes.func.isRequired,
		fetchSearch: PropTypes.func.isRequired,
	}

	onChangeInputValue = (e) => {
		const { onChangeInputValue, fetchSearch } = this.props;
		const { value } = e.target;
		onChangeInputValue(value);
		fetchSearch(value);
	}

	render() {
		const { searchState } = this.props;
		const { value } = searchState.input;

		return (
			<input
				className={styles.input}
				onChange={this.onChangeInputValue}
				value={value}
				placeholder="Type something..."
			/>
		);
	}
}

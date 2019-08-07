// @flow

import React from 'react';
import styles from './SearchForm.css';

type InputType = { value: String };
type Props = {
	searchState: { input: InputType },
	onChangeInputValue: (value: String) => null,
	fetchSearch: (value: String) => null,
	clearSearchResults: () => null,
};

export default class SearchForm extends React.Component<Props> {
	onChangeInputValue = (e: { target: InputType }) => {
		const { onChangeInputValue, fetchSearch, clearSearchResults } = this.props;
		const { value } = e.target;

		if (value === '') {
			clearSearchResults();
			return;
		}

		onChangeInputValue(value);

		if (value.length > 2) {
			fetchSearch(value);
		}
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

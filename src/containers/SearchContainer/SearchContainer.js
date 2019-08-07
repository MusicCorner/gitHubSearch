// @flow

import React from 'react';
import { connect } from 'react-redux';
import { changeSearchInputValue, fetchSearchRequest, clearSearchResults } from '../../actions/search/searchAction';

type State = {
	search: { [key: String]: any }
}

type Props = { [key: any]: any };

const SearchContainer = (Component: any) => {
	class SearchComponent extends React.Component<Props> {
		render() {
			return (
				<Component {...this.props} />
			);
		}
	}

	const mapStateToProps = (state: State) => ({
		searchState: state.search,
	});

	const mapDispatchToProps = {
		onChangeInputValue: changeSearchInputValue,
		fetchSearch: fetchSearchRequest,
		clearSearchResults,
	};

	return connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
};

export default SearchContainer;

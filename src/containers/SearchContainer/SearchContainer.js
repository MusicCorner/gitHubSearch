import React from 'react';
import { connect } from 'react-redux';
import { changeSearchInputValue, fetchSearchRequest, clearSearchResults } from '../../actions/search/searchAction';

const SearchContainer = (Component) => {
	class SearchComponent extends React.Component {
		render() {
			return (
				<Component {...this.props} />
			);
		}
	}

	const mapStateToProps = (state) => ({
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

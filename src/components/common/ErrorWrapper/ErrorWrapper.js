import React from 'react';
import PropTypes from 'prop-types';
import ErrorModal from '../ErrorModal/ErrorModal';
import MainComponent from '../../MainComponent/MainComponent';

const ErrorWrapper = (props) => {
	const { error, toggleErrorModal } = props;
	return (
		<>
			<MainComponent />
			<ErrorModal
				error={error}
				toggleErrorModal={toggleErrorModal}
			/>
		</>
	);
};

ErrorWrapper.propTypes = {
	error: PropTypes.object,
	toggleErrorModal: PropTypes.func.isRequired,
};

export default ErrorWrapper;

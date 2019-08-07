// @flow

import React from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';
import MainComponent from '../../MainComponent/MainComponent';

type Props = {
	error: { message: String },
	toggleErrorModal: () => null,
};

const ErrorWrapper = (props: Props) => {
	const { error, toggleErrorModal } = props;

	return (
		<>
			<MainComponent {...props}/>
			<ErrorModal
				error={error}
				toggleErrorModal={toggleErrorModal}
			/>
		</>
	);
};

export default ErrorWrapper;

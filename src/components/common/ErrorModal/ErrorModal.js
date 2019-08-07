// @flow

import React from 'react';
import { Modal, Button } from 'react-bootstrap';


type Props = {
	toggleErrorModal: () => null,
	error: { message: String },
};

export default class ErrorModal extends React.Component<Props> {
	handleClose = () => {
		const { toggleErrorModal } = this.props;
		toggleErrorModal();
	}

	render() {
		const { error } = this.props;
		const errorMessage = error && error.message;

		return errorMessage && (
			<Modal show={!!error} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Error</Modal.Title>
				</Modal.Header>
				<Modal.Body>{errorMessage}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

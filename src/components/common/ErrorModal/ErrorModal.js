import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

export default class ErrorModal extends React.Component {
	static propTypes = {
		toggleErrorModal: PropTypes.func.isRequired,
		error: PropTypes.object,
	}

	handleClose = () => {
		const { toggleErrorModal } = this.props;
		toggleErrorModal();
	}

	getAllErrorMessages = (message) => {
		return Object.keys(message).map(key => (
			<React.Fragment key={key}>
				{key}: {message[key]}
			</React.Fragment>
		));
	}

	render() {
		const { error } = this.props;
		const errorMessage = error && error.message && typeof error.message === 'string'
			? error.message : error && error.message && this.getAllErrorMessages(error.message);
		return error && (
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

import { connect } from 'react-redux';
import { defaultErrorAction } from '../../actions/common/defaultErrorAction';
import ErrorWrapper from '../../components/common/ErrorWrapper/ErrorWrapper';

const mapStateToProps = (state) => ({
	error: state.common.error,
});

const mapDispatchToProps = {
	toggleErrorModal: () => defaultErrorAction(null),
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorWrapper);

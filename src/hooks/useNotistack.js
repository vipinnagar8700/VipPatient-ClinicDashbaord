import {useSnackbar} from 'notistack';
import PropTypes from 'prop-types';

const useNotistack = (text, type = 'success') => {
    const {enqueueSnackbar} = useSnackbar();
    const notify = () => enqueueSnackbar(text, {variant: type});
    return {notify};
}

useNotistack.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
}

export default useNotistack;
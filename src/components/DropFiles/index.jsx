// hooks
import {useDropzone} from 'react-dropzone';
import useNotistack from '@hooks/useNotistack';

// utils
import PropTypes from 'prop-types';

const imgTypes = {
    'image/jpeg': [],
    'image/png': [],
    'image/gif': [],
    'image/bmp': [],
    'image/webp': [],
    'image/svg+xml': []
}

const docTypes = {
    'application/pdf': [],
    'application/msword': [],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
    'application/vnd.ms-excel': [],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': []
}

const DropFiles = ({type, multiple, children}) => {
    const {notify} = useNotistack('File has been successfully uploaded.', 'success');
    const handleDrop = () => notify();

    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({
        accept: type === 'image' ? {...imgTypes} : {...docTypes},
        multiple: multiple,
        onDrop: handleDrop
    });

    return (
        <div {...getRootProps()} className={isDragActive ? 'dropzone active' : 'dropzone'}>
            <input {...getInputProps()} />
            {children}
        </div>
    )
}

DropFiles.propTypes = {
    type: PropTypes.oneOf(['image', 'doc']).isRequired,
    multiple: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default DropFiles;
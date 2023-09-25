// components
import GroupSeparator from '@ui/GroupSeparator';
import PersonList from '@components/PersonList';

// utils
import PropTypes from "prop-types";

const Group = ({char, arr, type, gender}) => {
    const data = arr.filter(item => item.lastName.charAt(0).toLowerCase() === char);

    return (
        <>
            {
                data.length !== 0 ?
                    <div id={char}>
                        <GroupSeparator text={char} />
                        <PersonList arr={data} type={type} gender={gender} />
                    </div> : null
            }
        </>
    )
}

Group.propTypes = {
    char: PropTypes.string.isRequired,
    arr: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['patient', 'doctor', 'staff']).isRequired,
}

export default Group;
import {useState} from 'react';

const useGenderFilter = (targetArr) => {
    const [gender, setGender] = useState({value: "all", label: "all"});
    const genderArr = gender => {
        return targetArr.filter(item => item.gender === gender.value);
    }

    return {
        genderArr,
        gender,
        setGender
    }
}

export default useGenderFilter;
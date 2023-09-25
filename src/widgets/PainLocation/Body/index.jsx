// styled components
import {Rotate, BodyChart, View, Spots, Spot} from '@widgets/PainLocation/style';

// components
import {ThreeSixty} from '@mui/icons-material';
import Btn from '@ui/Btn';
import CustomTooltip from '@ui/CustomTooltip';

// assets
import male_front from '@assets/male_front.svg';
import male_back from '@assets/male_back.svg';
import female_front from '@assets/female_front.svg';
import female_back from '@assets/female_back.svg';

// hooks
import useNotistack from '@hooks/useNotistack';
import {useState} from 'react';

const Body = ({gender}) => {
    const [frontView, setFrontView] = useState(true);
    const [isAnyChecked, setIsAnyChecked] = useState(false);
    const {notify} = useNotistack('Your request have been successfully sent to your doctor.', 'info');

    const frontAreas = [
        {id: 'head', label: 'Head'},
        {id: 'neck', label: 'Neck'},
        {id: 'chest', label: 'Chest'},
        {id: 'stomach', label: 'Stomach'},
        {id: 'heart', label: 'Heart'},
        {id: 'left_arm', label: 'Left Arm'},
        {id: 'right_arm', label: 'Right Arm'},
        {id: 'left_leg', label: 'Left Leg'},
        {id: 'right_leg', label: 'Right Leg'}
    ];

    const backAreas = [
        {id: 'back', label: 'Back'},
        {id: 'left_shoulder', label: 'Left Shoulder'},
        {id: 'right_shoulder', label: 'Right Shoulder'},
        {id: 'lungs', label: 'Lungs'},
        {id: 'left_ankle', label: 'Left Ankle'},
        {id: 'right_ankle', label: 'Right Ankle'}
    ];

    const handleChange = e => {
        const checkboxes = Array.from(e.currentTarget.querySelectorAll('input[type="checkbox"]'));
        const isAnyChecked = checkboxes.some(checkbox => checkbox.checked);
        setIsAnyChecked(isAnyChecked);
    }

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        setIsAnyChecked(false);
        notify();
    }

    const drawSpots = (areas, side, gender) => {
        return areas.map(area => {
            const {id, label} = area;
            const areaId = `${gender}_${id}_${side}`;
            return (
                <Spot data-spot={`${id}_${side}`} key={areaId}>
                    <input type="checkbox" id={areaId} name={areaId}/>
                    <CustomTooltip title={label} placement="bottom">
                        <label htmlFor={areaId}>
                            <span className="aura"></span>
                        </label>
                    </CustomTooltip>
                </Spot>
            )
        })
    }

    return (
        <div className="wrapper">
            <Rotate tabIndex="0" onClick={() => setFrontView(prev => !prev)} aria-label="Change view">
                <ThreeSixty/>
            </Rotate>
            <BodyChart as="form" onChange={e => handleChange(e)} onSubmit={e => handleSubmit(e)}>
                <div className="chart_content">
                    {
                        frontView ?
                            <View side="front">
                                <img className={`${gender} front`}
                                     src={gender === 'male' ? male_front : female_front}
                                     alt="Body chart"
                                />
                                <Spots>
                                    {drawSpots(frontAreas, 'front', gender)}
                                </Spots>
                            </View>
                            :
                            <View side="back">
                                <img className={`${gender} back`}
                                     src={gender === 'male' ? male_back : female_back}
                                     alt="Body chart"
                                />
                                <Spots>
                                    {drawSpots(backAreas, 'back', gender)}
                                </Spots>
                            </View>
                    }
                </div>
                <Btn className={!isAnyChecked ? 'disabled' : ''} text="Submit request" type="submit"/>
            </BodyChart>
        </div>
    )
}

export default Body;
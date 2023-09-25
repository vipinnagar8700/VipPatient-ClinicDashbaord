// styled components
import {Wrapper, Content, Main, Rating} from './style';

// components
import Avatar from '@ui/Avatar';
import CustomRating from '@ui/CustomRating';

const DoctorRatingItem = ({data, period, selected, responsive}) => {
    const {name, online, speciality, rating, avatar} = data;

    return (
        <Wrapper className={selected ? 'current doctor-rating' : 'doctor-rating'} responsive={responsive}>
            <Content className="container">
                <Main>
                    <Avatar avatar={avatar} alt={name} online={online} size={60}/>
                    <div>
                        <h3>{name}</h3>
                        <span>{speciality}</span>
                    </div>
                </Main>
                <Rating className="rating">
                    <CustomRating value={rating[period]}/>
                    <span className="block">Rating <span
                        className="num">{rating[period].toFixed(2)}</span></span>
                </Rating>
            </Content>
        </Wrapper>
    )
}

export default DoctorRatingItem;
// styling
import styled from 'styled-components/macro';
import {fonts, textSizes} from '@styles/vars';

// utils
import moment from 'moment';

const Wrapper = styled.span`
  display: flex;
  gap: 8px;
  font-family: ${fonts.accent};
  font-size: ${textSizes['10']};
  text-transform: uppercase;
`

const Timestamp = ({date, text, time = false}) => {
    return (
        <Wrapper>
            {text && <span>{text}</span>}
            <span>{moment(date).format('DD MMM YYYY')}</span>
            {
                time &&
                <>
                    <span>/</span>
                    <span>{moment(date).format('hh:mm A')}</span>
                </>
            }
        </Wrapper>
    )
}

export default Timestamp;
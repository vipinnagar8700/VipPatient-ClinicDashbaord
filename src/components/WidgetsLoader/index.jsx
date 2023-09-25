// styling
import styled from 'styled-components/macro';
import {colors} from '@styles/vars'

// components
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const WidgetsLoader = () => {
    return (
        <Container>
            <div>
                <CircularProgress
                    variant="indeterminate"
                    size={100}
                    thickness={2}
                    value={100}
                    aria-busy={true}
                    sx={{
                        color: colors.blue
                    }}
                />
            </div>
        </Container>
    )
}

export default WidgetsLoader;
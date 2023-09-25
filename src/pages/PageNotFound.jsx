// styling
import styled from 'styled-components/macro';
import {flex} from '@styles/vars';

// components
import Page from '@layout/Page';
import {Container} from '@components/Widget/style';
import Lottie from 'lottie-react';
import Btn from '@ui/Btn';
import {motion} from 'framer-motion';

// hooks
import {useNavigate} from 'react-router-dom';

// assets
import notFound from '@assets/404.json';

const FlexContainer = styled(Container)`
  justify-content: center;
  padding: 24px;
`;

const Animation = styled.div`
  max-height: 400px;
  display: flex;
  margin: 0 auto;
`;

const Content = styled.div`
  ${flex.col};
  gap: 24px;
  align-items: center;
  text-align: center;

  button {
    max-width: 240px;
  }
`;

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <Page title="Page not found">
            <FlexContainer as={motion.div} i
                           nitial={{opacity: 0}}
                           whileInView={{opacity: 1}}
                           transition={{duration: .4}}
                           viewport={{once: true}}>
                <Animation>
                    <Lottie className="lottie" animationData={notFound}/>
                </Animation>
                <Content>
                    <h2>Page you're looking for doesn't exist</h2>
                    <Btn text="Return" handler={() => navigate(-1)}/>
                </Content>
            </FlexContainer>
        </Page>
    );
}

export default PageNotFound;
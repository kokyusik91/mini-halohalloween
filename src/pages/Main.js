import React from 'react';
import { Grid, Container } from '../elements';

const Main = (props) => {
  React.useEffect(() => {
    console.log('main');
  }, []);
  return (
    <>
      <Grid height='450px' bg='#000'>
        <Container>
          <p
            style={{ color: '#fff', lineHeight: '450px', textAlign: 'center' }}
          >
            동영상 혹은 이미지
          </p>
        </Container>
      </Grid>
      <Container margin='40px auto 0'>
        <Grid margin='0 0 40px 0'>
          <h1>포스팅 키워드</h1>
        </Grid>
        <Grid is_flex justify='space-between'>
          <Grid type='card'>1</Grid>
          <Grid type='card'>2</Grid>
          <Grid type='card'>3</Grid>
          <Grid type='card'>4</Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;

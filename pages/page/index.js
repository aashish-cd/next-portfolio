import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { profileData } from '../data/profile';

const Home = () => {
  return (
    <>
      <Container className='bg-dark p-4'>
        <Container maxWidth='md'>
          <div>
            <Typography
              variant='h1'
              align='center'
              color='white'
              style={{
                fontSize: '3rem',
              }}
              gutterBottom
            >
              {profileData[0].title}
            </Typography>
            <Typography variant='h5' align='center' color='white' paragraph>
              {profileData[0].description}
            </Typography>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Home;

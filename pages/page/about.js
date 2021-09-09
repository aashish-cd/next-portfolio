import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { resumeData } from '../data/profile';
import { Container, Grid, Typography, Button } from '@material-ui/core';

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > resumeData.length - 1) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(resumeData.length - 1);
    }

    return () => {};
  }, [index]);
  return (
    <>
      <Container maxWidth='sm' className='bg-dark p-4 justify-content-center'>
        <Grid container>
          <Grid
            item
            className='d-flex flex-row flex-glow w-100 '
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <i
              class='bx bx-left-arrow '
              style={{
                fontSize: '48px',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(index - 1)}
            ></i>
            <Container alignContent='center' alignItems='center'>
              <div className='d-flex flex-row justify-content-center  '>
                {resumeData[index]?.logo?.map((bx) => (
                  <i className={`${bx}`} style={{ fontSize: '5rem' }}></i>
                ))}
              </div>
              <Typography variant='h5' align='center' className=''>
                {resumeData[index]?.job}
              </Typography>
              <Typography variant='h6' align='center'>
                {resumeData[index]?.workplace}
              </Typography>
              <Typography
                variant='h6'
                className='bg-blue shadow-lg duration'
                align='center'
              >
                {resumeData[index]?.duration}
              </Typography>
              <Typography variant='h6' align='center'>
                {resumeData[index]?.description}
              </Typography>
              <div align='center'>
                <Link href={`/page/${resumeData[index]?.id}`} align='center'>
                  <Button variant='outlined' color='primary'>
                    See More
                  </Button>
                </Link>
              </div>
            </Container>
            <i
              class='bx bx-right-arrow'
              style={{
                fontSize: '48px',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(index + 1)}
            ></i>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;

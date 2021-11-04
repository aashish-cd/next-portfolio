import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Typography, Button } from '@material-ui/core';
import { resumeData } from '../../data/profile';

const SingleAbout = () => {
  const [resume_id, setResumeId] = useState(0);
  const router = useRouter();
  console.log(router);
  const id = router.query.index;
  useEffect(() => {
    setResumeId(id - 1);

    return () => {};
  }, [id]);
  return (
    <>
      <Container alignContent='center' alignItems='center' className='m-2 p-4'>
        <div className='d-flex flex-row justify-content-center  '>
          {resumeData[resume_id]?.logo?.map((bx, index) => (
            <i key={index} className={`${bx}`} style={{ fontSize: '5rem' }}></i>
          ))}
        </div>
        <Typography variant='h5' align='center' className='mt-2 mb-2'>
          {resumeData[resume_id]?.job}
        </Typography>
        <Typography variant='h6' align='center' className='mt-2 mb-2'>
          <a href={resumeData[resume_id]?.site}>
            <Button variant='contained'>
              {resumeData[resume_id]?.workplace}
            </Button>
          </a>
        </Typography>
        <Typography
          variant='h6'
          className='bg-blue shadow-lg duration mt-2 mb-2'
          align='center'
        >
          Duration :{' '}
          <Button variant='outlined' color='secondary'>
            {resumeData[resume_id]?.duration}
          </Button>
        </Typography>
        <Typography variant='h6' align='center' className='mt-2 mb-2'>
          skills :{' '}
          {resumeData[resume_id]?.skill.map((sk, index) => (
            <Button key={index} variant='outlined' color='secondary'>
              {sk}
            </Button>
          ))}
        </Typography>
        <Typography variant='h6' align='center' className='mt-2 mb-2'>
          {resumeData[resume_id]?.description}
        </Typography>
      </Container>
    </>
  );
};

export default SingleAbout;

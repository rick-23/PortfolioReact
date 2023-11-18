import React from 'react';
import rk from '../../assets/rk.png';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Intro = () => {
  return (
    <section className='bg-primary px-5 text-white md:py-32'>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className='text-4xl lg:text-5xl'>
            Hi, I'm <span className='text-accent'>Radha Krishnan</span> <br/>
          </h1>
          <p className='py-3'>I'm a passionate Software Engineer, focusing on designing and building software applications for the web.</p>
          <div className="flex py-3 items-center">
          <a href='/#projects' className='bg-transparent border-2 px-3 py-1 inline-block text-white border-[white] hover:border-[yellow] hover:text-[yellow] cursor-pointer'>
            See Projects
          </a>
          <a href='https://www.linkedin.com/in/radha-krishnan-swamynathan-7039a285/' target='_blank' rel='noreferrer' className='ml-2 inline-block text-white hover:text-[yellow]'>
            {" "}
            <AiOutlineLinkedin size={40} /> {""}
          </a>
          <a href='https://github.com/rick-23' target='_blank' rel='noreferrer' className='ml-2 inline-block text-white hover:text-[yellow]'>
            {" "}
            <AiOutlineGithub size={40} /> {""}
          </a>
          </div>
          
        </div>
        <div className="profileImage">
          <img src={rk} alt='Radha Krishnan' className='lg:w-[75%] ml-auto lg:-mt-20' />
        </div>
      </div>
    </section>
  )
}

export default Intro
import React from 'react';
import experienceData from '../../experience.json';

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-5 min-h-screen" id="about">
      <div className='container mx-auto'>
        <div className='about-info'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-yellow-300 pb-2'>
            About Me
          </h2>
        </div>
        <div className='about-content'>
          <p className='pb-5'>
            Full Stack Software Engineer with over 6 years of experience and am currently based in Toronto, Canada.
          </p>
          <p className='pb-5'>
            I love exploring the advancements in data and software engineering, and am excited about transforming complex challenges into elegant solutions through innovative coding and data-driven insights.
          </p>
        </div>

        <div className='grid grid-cols-2 items-center justify-items-auto'>
          <div className='about-panel1 '>
            <ol className="about-timeline border-l border-yellow-300">
              {experienceData.map((exp, i) => (
                <li key={i}>
                  <div className="flex-start flex items-center pt-3">
                    <div
                      className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <h4 className="mb-1.5 text-xl font-semibold">{exp.name}</h4>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <p className="mb-1.5 text-neutral-500 dark:text-neutral-300">
                      {exp.designation}
                    </p>
                    <p className="mb-1.5 text-neutral-500 dark:text-neutral-300">
                      {exp.location}
                    </p>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      {exp.duration}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className='about-skills flex flex-wrap justify-items-auto items-stretch'>
            <p className='text-2xl font-bold inline border-b-4 border-yellow-300 text-center '>Skills</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>JavaScript and TypeScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>Angular</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>NodeJS (MEAN & MERN Stacks)</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>.NET Framework (C#)</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>Java Spring Boot</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>CSS (SCSS & SASS)</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>Mongodb</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>MySQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>MS SQL Server</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>DynamoDB, S3, RDS & ElastiCache</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>Azure</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>RESTful, RPC, GraphQL APIs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-[yellow] hover:border-[yellow]'>
                <p className='my-4'>Docker and Kubernetes</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
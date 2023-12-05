import React from 'react';
import projects from '../../projects.json';

const Projects = () => (
  <section className="bg-primary text-white px-5 py-32" id="projects">
    <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
      <div className="about-info mb-5">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-yellow-300 pb-2">
          Projects
        </h2>

        <p className="pb-5">
          These are some of my projects across all my areas of interest.
        </p>
      </div>
    </div>

    <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
      {projects.map((project, i) => {
        return (
          <div className="flex flex-col xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-screen-xl p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{project.title}</h5>
            <p className="font-normal mb-2">{project.desc}</p>
            <p className="font-light mb-2">Tech stack: {project.technologies}</p>
            {/* <div className='pt-8 text-center'>
            <a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div> */}
          </div>
        );
      })}
    </div>
  </section>
);

export default Projects;
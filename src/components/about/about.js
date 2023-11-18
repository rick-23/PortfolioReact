import React from 'react';
import experienceData from '../../experience.json';

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-5" id="about">
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
              {experienceData.map(exp => (
                <li>
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

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">

              <h5 className="mb-2 text-2xl font-bold tracking-tight">Programming Languages</h5>
              <p className="font-normal">C#, JavaScript, TypeScript, Java, SQL, C++</p>
            </div>

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Cloud Providers</h5>
              <p className="font-normal">Azure (Function Apps, App Service, CosmosDB, Event hub, Event Grid, App Insights)</p>
              <p className="font-normal">AWS (Lambda, ECS, Fargate, ECR, API Gateway, SQS, SNS, DynamoDB, Cloudwatch, ElastiCache, StepFunctions)</p>
            </div>

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Frameworks</h5>
              <ul className="font-normal">
                <li>.NET Framework (.NET Core, .Net Web-API, .NET MVC)</li>
                <li>React (React, Redux, Redux-Saga, Axios, Webpack, Babel)</li>
                <li>Java (Spring Boot, J2EE, JSP)</li>
                <li>NodeJS, VueJS, Angular, AngularJS,</li>
                <li>Apollo GraphQL</li>
              </ul>
            </div>

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Testing Frameworks</h5>
              <p className="font-normal">NUnit, JUnit, Jest, Jasmine, Selenium</p>
            </div>

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Databases</h5>
              <p className="font-normal">AWS DynamoDB, AWS RDS, Azure Cosmos, Microsoft SQL Server, Oracle, MySQL, PostGreSQL</p>
            </div>

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">CI/CD and DevOps</h5>
              <p className="font-normal">AWS CDK, AWS CodePipeline, AWS CodeCommit, Terraform, Azure DevOps</p>
            </div>

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Data Analysis and Machine Learning</h5>
              <p className="font-normal">NumPy, Pandas, Scikit-Learn, Keras, TensorFlow, OpenCV</p>
            </div>

            <div className="flex flex-col max-w-xs p-6 bg-primary border border-gray-200 m-3 rounded-lg hover:text-[yellow] hover:border-[yellow]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Tools and Standards</h5>
              <p className="font-normal">Docker, Git, Microservices (RESTful, RPC, GraphQL APIs), Postman, OData</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About
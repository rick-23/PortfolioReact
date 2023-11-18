import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import FormInput from '../common/formInput';

const contacts = [
  {
    name: 'Toronto, Ontario Canada',
    icon: <FiMapPin />,
  },
  {
    name: 'swamynathan.radhakrishnan@gmail.com',
    icon: <FiMail />,
  },
  {
    name: '613 261 1495',
    icon: <FiPhone />,
  },
];

const Contact = () => {
  return (
    <section className="bg-primary text-white px-5 py-20" id="contact">
      <div className='container'>
        <div className='contact-intro'>
          <div><h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[215px] border-yellow-300 pb-2'>
            Contact me
          </h2>
          </div>
          <p className='pb-5'>
            I am currently available for Software Engineer / Full Stack Developer positions.
          </p>
          <p className='pb-5'>
            Would love to hear more about any freelance contributions to solving real world problems through code.
          </p>
        </div>
        <div className='grid grid-cols-2 items-center justify-items-auto'>

          <div className="contact-details">
            <div className="text-left max-w-xl px-6">
              <h2 className="font-general-medium text-2xl text-primary-dark mt-12 mb-8">
                Contact details
              </h2>
              <ul className="font-general-regular">
                {contacts.map((contact) => (
                  <li className="flex ">
                    <i className="text-2xl text-gray-500 mr-4">
                      {contact.icon}
                    </i>
                    <span className="text-lg mb-4 text-ternary-dark">
                      {contact.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact-form">
            <div className="leading-loose">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
              >
                <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                  Contact Form
                </p>
                <FormInput
                  inputLabel="Full Name"
                  labelFor="name"
                  inputType="text"
                  inputId="name"
                  inputName="name"
                  placeholderText="Your Name"
                  ariaLabelName="Name"
                />
                <FormInput
                  inputLabel="Email"
                  labelFor="email"
                  inputType="email"
                  inputId="email"
                  inputName="email"
                  placeholderText="Your email"
                  ariaLabelName="Email"
                />
                <FormInput
                  inputLabel="Subject"
                  labelFor="subject"
                  inputType="text"
                  inputId="subject"
                  inputName="subject"
                  placeholderText="Subject"
                  ariaLabelName="Subject"
                />

                <div className="mt-6">
                  <label
                    className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Message"
                  ></textarea>
                </div>

                <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                  <button
                    type="submit"
                  >Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
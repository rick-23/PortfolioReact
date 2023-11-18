import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () =>  setToggle(!toggle);
  return (
    <header className='flex justify-end px-5 py-2 bg-primary'>
      <nav className='hidden md:block'>
        <ul className='flex'>
          <li>
            <a href='/#about'>About</a>
          </li>
          <li>
            <a href='/#projects'>Projects</a>
          </li>
          <li>
            <a href='/#contact'>Contact</a>
          </li>
          <li>
            <a href='#resume -link' target='_blank' rel='noreferrer'>Resume</a>
          </li>
        </ul>
      </nav>
      <nav className={!toggle ? 'mobile-nav left-[-100%]': 'mobile-nav left-0'}>
        <ul className='flex flex-col'>
        <li>
            <a href='/#about'>About</a>
          </li>
          <li>
            <a href='/#projects'>Projects</a>
          </li>
          <li>
            <a href='/#contact'>Contact</a>
          </li>
          <li>
            <a href='/#resume'>Resume</a>
          </li>
        </ul>
      </nav>
      <button onClick={handleToggle} className='block md:hidden'>
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  )
}

export default Header
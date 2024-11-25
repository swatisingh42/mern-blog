import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar fluid className="border-b-2 p-4">
      {/* Brand Section */}
      <Navbar.Brand>
        <Link
          to="/"
          className="text-sm sm:text-xl font-semibold dark:text-white flex items-center"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 rounded-lg text-white mr-2">
            Swati's
          </span>
          Blog
        </Link>
      </Navbar.Brand>

      {/* Center Search Bar and Icon */}
      <div className="flex-1 flex justify-center items-center">
        <form className="w-full max-w-md flex items-center space-x-2">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="w-full lg:block hidden"
          />
          <Button
            className="w-12 h-10 lg:hidden"
            color="gray"
            pill
            aria-label="Search"
          >
            <AiOutlineSearch />
          </Button>
        </form>
      </div>

      {/* Right Side Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Moon Button for Theme Toggle */}
        <Button
          className="w-12 h-10 hidden sm:block"
          color="gray"
          pill
          aria-label="Toggle Theme"
        >
          <FaMoon />
        </Button>

        {/* Sign In Button with Gradient Background */}
        <Link to="/sign-in">
          <Button className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 text-white hover:from-teal-600 hover:via-cyan-600 hover:to-teal-500" outline>
            Sign In
          </Button>
        </Link>

        {/* Toggle Navbar Button for Mobile */}
        <Navbar.Toggle />
      </div>

      {/* Navigation Links for Mobile Collapse */}
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}> 
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

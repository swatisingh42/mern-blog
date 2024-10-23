import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-teal-700 via-teal-500 to-[#41B3A2] rounded-md text-white">
          Swati's
        </span>
        BLOG
      </Link>

      {/* Search Form */}
      <form className="flex items-center gap-2">
        {/* Search Input with Icon */}
        <TextInput
          type="text"
          placeholder="Search..."
          icon={AiOutlineSearch} // Add the icon directly
          className="hidden lg:inline"
        />
      </form>

      {/* Search Button for mobile */}
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
        </Button>
        <Link to="/sign-in">
        <Button className="bg-gradient-to-r from-teal-700 via-teal-500 to-[#41B3A2] text-white" outline>
     Sign In
</Button>

        </Link>
        <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path ==='/'} as={'div'}>
            <Link to='/'>
               Home
            </Link>

            </Navbar.Link>
            <Navbar.Link active={path ==='/about'}  as={'div'}>
            <Link to='/about'>
               About
            </Link>

            </Navbar.Link>
            <Navbar.Link  active={path ==='/projects'}  as={'div'}>
            <Link to='/projects'>
               Projects
            </Link>

            </Navbar.Link>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

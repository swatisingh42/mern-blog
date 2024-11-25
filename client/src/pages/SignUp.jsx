import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 rounded-lg text-white mr-2">
              Swati's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Welcome to my blogging website!
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <Button
              className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

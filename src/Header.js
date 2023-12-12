/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6eHinrjkh7p
 */
import React from 'react'
// import Link from "next/link"
import { Input } from '@/components/ui/input'

import Logo from 'assets/logo2.png'

export default () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            alt="Logo"
            className="h-14"
            height="40"
            src={Logo}
            style={{
              aspectRatio: '40/40',
              objectFit: 'cover'
            }}
            width="40"
          />
          <div className="text-lg font-semibold">RateStylists</div>
        </div>
        <div className="flex items-center space-x-4 flex-grow justify-center">
          <div className="flex items-center bg-gray-100 rounded-full pl-4 pr-2 py-2 w-full max-w-lg">
            <SearchIcon className="text-gray-500 h-5 w-5" />
            <Input
              aria-label="Search by name or specialty"
              className="bg-gray-100 outline-none w-full font-bold"
              style={{ borderColor: 'transparent', boxShadow: 'none' }}
              placeholder="Search by name or specialty"
            />
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <div className="space-x-2">
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              Log in
            </Link>
            <span>|</span>
            <Link className="text-gray-600 hover:text-gray-800" href="#">
              Sign up
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

function SearchIcon (props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

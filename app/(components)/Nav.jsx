import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-3  flex">
          <Link
            href="/"
            className="text-white text-lg font-bold ml-0 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaHome width={2} height={2} />
          </Link>
          <Link
            href="/TicketPage/new"
            className="text-white text-lg font-bold ml-1 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaTicket width={3} height={3} />
          </Link>
        </div>
        <div className="flex space-x-4">
          <h3 className="text-xl text-white  py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">
            Ticketing-App
          </h3>
        </div>

        <div className="flex space-x-4">
          <Link
            href="#"
            className="text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            href="#"
            className="text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

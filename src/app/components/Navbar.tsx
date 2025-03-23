"use client";
import React from "react";
import { Nav } from "./ui/Nav";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export function Navbar() {
  return (
    <div className=" w-full top-4 border-white/[0.2] rounded-full border flex items-center justify-evenly px-5 py-1 bg-transparent shadow-md">
      {/* Left Logo */}
      <div className="flex items-center">
        <Image src="/logo-gcb.png" alt="Raj" height={50} width={50} priority />
      </div>
      {/* Middle Nav */}
      <div className="flex items-center justify-center flex-1">
        <Nav />
      </div>
      {/* Right Social Media Icons */}
      <div className="flex items-center gap-4">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-gray-600 transition-all" size={24} />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white dark:text-white hover:text-gray-600 transition-all" size={24} />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-white hover:text-gray-600 transition-all" size={24} />
        </a>
      </div>
    </div>
  );
}

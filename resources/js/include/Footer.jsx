import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-300 text-gray-300 py-6 z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-black mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} MAZAVAMANANA Zeppélin Tiavy.
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.facebook.com/tiavy.breedje/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:opacity-80"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/zepp%C3%A9lin-tiavy-mazavamanana-6b60302aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:opacity-80"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MAZAVAMANANA-ZEPPELIN-TIAVY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:opacity-80"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

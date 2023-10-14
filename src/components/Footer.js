import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] py-4 text-gray-300 text-center">
      <div className="flex justify-center items-center">
        <a
          href="https://instagram.com/shahidafridi.18?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/Shaik.ShahidAfridi18?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/shaik-shahid-afridi-3563a3286"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shahidafridi18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm mt-2">
        Connect  with  me  on social media
      </p>
    </footer>
  );
};

export default Footer;

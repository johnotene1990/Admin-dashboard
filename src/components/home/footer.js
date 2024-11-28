import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50-full shadow text-center py-4 relative">
      <p className="text-sm text-gray-500">
        © Copyright <span className="font-medium text-gray-700">NiceAdmin</span>. All Rights Reserved
      </p>
      <p className="text-sm text-gray-500">
        Designed by <a href="https://bootstrapmade.com" className="text-blue-600 hover:underline">BootstrapMade</a>
      </p>
      <a
        href="#top"
        className="absolute right-4 bottom-4 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

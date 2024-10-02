import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="image/Logo.jpg" alt="Pak-Cloth House Logo" className="w-20 h-20 text-white p-2 bg-emerald-500 rounded-full" />
              <span className="ml-3 text-xl">PAK-CLOTH HOUSE</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Leading the tradition of quality and style in clothing.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Location</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600">Multan, Pakistan</p>
                </li>
                <li>
                  <p className="text-gray-600">Email:pakclothhouse2128@gmail.com</p>
                </li>
                <li>
                  <p className="text-gray-600">Phone: (+92) 314-4490431</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">FAQs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Our Collections</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Men's Clothing</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">T-Shirts</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Jeans</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Traditional Wear</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Style Guide</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Customer Reviews</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 PAK-CLOTH HOUSE — All Rights Reserved</p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

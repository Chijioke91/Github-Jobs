import React from 'react';

const Header = () => {
  return (
    <header className="h-36 w-screen md:h-44 md:rounded-bl-full bg-blue-600 text-white">
      <div className="flex items-center justify-between md:items-start md:pt-8 md:px-8 lg:px-36 h-full px-4 pb-8">
        <h1 className="text-4xl md:text-3xl font-semibold">devJobs</h1>
        <div className="flex items-center justify-between space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 md:h-6 md:w-6"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex flex-col justify-center p-1 h-5 w-12 md:h-6 md:w-14 rounded-2xl bg-white">
            <span className="block bg-blue-600 rounded-full h-3 w-3 md:h-4 md:w-4 "></span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 md:h-6 md:w-6"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
      <div className="md:hidden bg-white rounded-xl absolute h-20 -mt-2 md:mt-5 top-28 left-2 sm:left-10 right-2 sm:right-10">
        <div className="flex items-center justify-center mt-4">
          <input
            type="text"
            className="border-none focus:ring-0 focus:ring-offset-0 text-gray-700 placeholder-gray-700"
            placeholder="Filter by title..."
          />
          <div className="flex justify-between items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-500 w-8 h-10"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>

            <div className="flex flex-col justify-center items-center bg-blue-800 opacity-80 h-12 w-12 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="z-10 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden divide-x-2 md:flex lg:justify-between text-gray-700 bg-white rounded-xl absolute h-20 -mt-2 md:mt-5 top-28 left-2 md:left-8 right-2 md:right-8 lg:left-44 lg:right-44">
        <div className="flex items-center p-2 text-blue-600 lg:w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Filter by title..."
            className="text-gray-700 bg-transparent text-sm font-normal placeholder-gray-500 border-none focus:ring-0"
          />
        </div>
        <div className="flex items-center p-2 lg:w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>

          <input
            type="text"
            placeholder="Filter by Location..."
            className="text-gray-700 bg-transparent text-sm font-normal placeholder-gray-500 border-none focus:ring-0"
          />
        </div>
        <div className="flex items-center lg:justify-between space-x-4 md:space-x-6 lg:space-x-5 p-2 lg:w-1/3">
          <div className="flex items-center  space-x-1 lg:space-x-4">
            <input
              type="checkbox"
              placeholder="Filter by Location..."
              className="w-7 h-7 rounded-md focus:outline-none focus:ring-offset-0 focus:ring-0 bg-gray-300 border-0"
            />
            <h1 className="text-gray-800 font-bold text-sm lg:text-base lg:hidden">
              Full Time
            </h1>
            <h1 className="text-gray-800 font-bold text-sm lg:text-base hidden lg:block">
              Full Time Only
            </h1>
          </div>
          <button className="p-2 lg:text-base w-24 h-10  rounded-lg bg-blue-500 text-white font-semibold text-sm tracking-wider">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

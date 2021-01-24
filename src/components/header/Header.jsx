const Header = () => {
  return (
    <div className="bg-blue-600 h-40 md:h-52  w-screen text-white md:rounded-bl-full ">
      <section className="flex flex-col items-center">
        <div className="flex items-center space-x-16 sm:space-x-24 lg:flex lg:w-11/12 lg:justify-between py-10">
          <h1 className="text-4xl font-bold">devjobs</h1>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div className="flex flex-col justify-center p-1 h-7 w-14 rounded-2xl bg-white">
              <span className="block bg-blue-600 rounded-full h-5 w-5 "></span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </div>
        <div className="md:hidden h-20 bg-white rounded-xl flex items-center px-4 -space-x-10 sm:space-x-0">
          <input
            type="text"
            placeholder="Filter by title..."
            className="text-gray-700 placeholder-gray-700 border-none focus:ring-0"
          />
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-500 w-8 h-12"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-col justify-center items-center bg-blue-800 opacity-80 h-14 w-14 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="z-10 w-8 h-8"
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
        <div className="hidden md:flex lg:justify-between h-24 w-11/12 mt-4 bg-white rounded-xl px-2 divide-x-2">
          <div className="flex items-center space-x-1 pl-2 lg:-pl-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="z-10 w-8 h-8 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Filter by title..."
              className="lg:hidden text-gray-700 text-base placeholder-gray-700 w-40 border-none focus:ring-0"
            />
            <input
              type="text"
              placeholder="Filter by title, companies, expertise..."
              className="hidden lg:block text-gray-700 text-base placeholder-gray-700 w-72 border-none focus:ring-0"
            />
          </div>
          <div className="flex items-center space-x-1 pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="z-10 w-8 h-8 text-blue-600"
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
              className="text-gray-700 text-base placeholder-gray-700 w-40 lg:w-72 border-none focus:ring-0"
            />
          </div>
          <div className="flex items-center space-x-5 pl-4">
            <input
              type="checkbox"
              placeholder="Filter by Location..."
              className="w-8 h-8 rounded-md focus:outline-none focus:ring-offset-0 focus:ring-0 bg-gray-300 border-0"
            />
            <h1 className="text-gray-800 font-bold text-lg">Full Time</h1>
            <button className="p-2 w-24 h-16 lg:h-12 lg:w-24 rounded-lg bg-blue-500 text-white font-semibold text-xl tracking-wider">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

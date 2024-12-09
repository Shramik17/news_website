import React from 'react';
import { useNewsContext } from '../../Context/Context';

const Navbar = () => {
  const { category, changeCategory, setQuery } = useNewsContext();

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleSearch = (e) => {   //realted to search
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    setQuery(query);
  };

  return (
    <>
      <nav className='flex justify-between items-center h-20 bg-black text-white font-mono px-6'>
        {/* Logo Section */}
        <div className="logo flex items-center bg-sky-700 py-2 px-4 rounded-lg">
          <h1 className='text-3xl italic font-bold text-white hover:text-black hover:cursor-pointer transition duration-300'><a href="https://www.aajtak.in/">ABHI-TAAK</a></h1>
        </div>

        {/* Categories Section */}
        <div className="menu-list">
          <ul className="category-list flex gap-6 text-lg items-center cursor-pointer">
            {categories.map((Name) => (
              <li
                key={Name}
                className={`px-3 py-1 rounded-lg transition duration-300 ${category === Name
                    ? "bg-blue-500 text-white font-semibold italic"
                    : "hover:bg-gray-700 hover:text-blue-200"
                  }`}
                onClick={() => changeCategory(Name)}
              >
                {Name}
              </li>
            ))}
          </ul>
        </div>

        {/* Search Bar */}
        <div className="search-bar flex items-center">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              name="search"
              placeholder="Search it"
              className='p-2 text-black text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <button
              type='submit'
              className='italic bg-sky-700 text-white py-1 px-3 rounded-lg hover:bg-sky-800 transition duration-300'>
              Search
            </button>
          </form>
        </div>


      </nav>
    </>
  );
};

export default Navbar;
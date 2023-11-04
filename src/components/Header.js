import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';
import Cart from '../assets/images/heart cart icon.png';

export const Header = () => {
  const activeClass =
    'text-gray-900 dark:text-pink-300  mr-5 border-blue-900 hover:text-pink-600 text-pink-600  activ';

  const inActiveClass =
    'text-gray-900 dark:text-pink-300  mr-5 border-blue-900 hover:text-pink-600  rounded-lg';
  const { hidden, setHidden } = useState(true);

  return (
    <header className="mb-4">
      <nav className="  fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <NavLink
            to="/home"
            className="flex ml-10 "
          >
            <img
              src={Logo}
              className="h-8 "
              alt="Shopaholic-U Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white hover:text-pink-600">
              Shopaholic-U
            </span>
          </NavLink>
          <div className="flex items-center ">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-md text-sky-700 ">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              to="/login"
              className="ml-20  font-semibold sm:text-lg whitespace-nowrap dark:text-white hover:text-pink-600 "
            >
              Login
            </NavLink>

            <img
              to="/cart"
              src={Cart}
              className=" w-14 mr-5"
              alt="Shopaholic-U Cart"
            />
          </div>
        </div>
      </nav>
      <nav className="flex items-center bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto"></div>
      </nav>
    </header>
  );
};

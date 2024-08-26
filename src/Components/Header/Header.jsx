import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar fluid rounded className="shadow-md">
        <Navbar.Brand>
          <img
            src="./e-commerce.jfif"
            className="mr-3 h-20 sm:h-9 rounded-md"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <NavLink
            to="login"
            className="hover:bg-cyan-700 p-3 rounded-md dark:text-white hovertext-white font-semibold "
          >
            Admin Login
          </NavLink>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="">Home</NavLink>

          <NavLink to="/compare">Compare</NavLink>
          <NavLink to="cart">
            <svg
              className="w-7 h-7 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

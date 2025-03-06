import { BsSunFill, BsMoonFill, BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const itemsInCart = useSelector((state) => state.cart.numItemsInCart);
  return (
    <nav className="bg-base-200">
      <div className="navbar max-w-6xl mx-auto px-8">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary items-center text-3xl"
          >
            C
          </NavLink>
          {/* DropDown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu mt-3 menu-sm z-[1] p-2 bg-base-200 shadow rounded-box w-52 dropdown-content"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* NAV-LINKS */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-box bg-base-200">
            <NavLinks />
          </ul>
        </div>
        {/* end-content */}
        <div className="navbar-end">
          {/* Theme-Icon */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* Cart-link */}
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge indicator-item badge-xs badge-primary">
                {itemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

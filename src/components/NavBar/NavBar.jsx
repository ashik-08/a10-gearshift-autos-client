import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-menu text-sm md:text-lg font-bold"
              : "text-sm md:text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCar"
          className={({ isActive }) =>
            isActive
              ? "text-menu text-sm md:text-lg font-bold"
              : "text-sm md:text-lg"
          }
        >
          Add Car
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "text-menu text-sm md:text-lg font-bold"
              : "text-sm md:text-lg"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <section className="bg-blue-gray-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          {/* logo & name */}
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <img
              className="w-10 md:w-14 lg:w-16"
              src="https://i.ibb.co/gStZhX6/gear-Up-logo.png"
              alt="logo-img"
            />
            <Link
              to="/"
              className="text-metal md:text-2xl xl:text-3xl font-indie font-semibold"
            >
              GearShift Autos
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* dropdown icon */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 md:w-14 lg:w-16 rounded-full">
                {user && user?.photoURL ? (
                  <img
                    className="text-[10px]"
                    src={user?.photoURL}
                    alt="img-error"
                  />
                ) : (
                  <img
                    className="text-[10px]"
                    src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                    alt="default"
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box min-w-[200px] w-fit"
            >
              {user ? (
                <>
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li>
                    <a>{user?.email}</a>
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;

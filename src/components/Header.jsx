import React, { useContext,  useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from './provider/AuthProviders';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


const Header = () => {
  const { user, logOut} = useContext(AuthContext);

  const [users, setUsers] = useState([]);



  const admin = users.find((role) => role.role === 'Admin');
  // const student = users.find((role) => role.role === 'student');
  const instructor = users.find((role) => role.role === 'Instructor');

  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const handleLogin = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
      });
  };

  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">CollegesUI</a>



    <div className={`${isMenuOpen ? '' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>

<div className="text-sm lg:flex-grow text-center mx-auto">
  <NavLink to="/" className={`block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl ${isActive('/') ? 'text-blue-500' : ''}`}
    isActive={isActive}>Home
  </NavLink>
  <NavLink to="/colleges"
    className={`block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl ${isActive('/colleges') ? 'text-blue-500' : ''}`}
    isActive={isActive}
  >
    Colleges
  </NavLink>
  <NavLink
    to="/admission"
    className={`block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl ${isActive('/admission') ? 'text-blue-500' : ''}`}
    isActive={isActive}
  >
    Admission
  </NavLink>
  <NavLink
    to="/myCollege"
    className={`block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl ${isActive('/myCollege') ? 'text-blue-500' : ''}`}
    isActive={isActive}
  >
    My College
  </NavLink>
</div>
<div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>

<div>
  {!user ? (
    <React.Fragment>
     
      <NavLink
        exact
        to="/login"
        className={`block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl ${isActive('/login') ? 'text-blue-500' : ''}`}
        isActive={isActive}
      >
        Sign In
      </NavLink>
    </React.Fragment>
  ) : (
    <div>

      <button
        onClick={handleLogin}
        className="inline-block text-xl px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 last-child"
      >
        Log Out
      </button>

      
     
    </div>
  )}
</div>
<Tooltip id="my-tooltip" />
</div>
  </div>


  <div className="flex-none gap-2">
    

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">

        {user && (
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-content={user.displayName}
          src={user.photoURL}
          className="h-[45px] w-[45px] rounded-full inline-block"
          alt=""
        />
      )}
   
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

  </div>
</div>


    </>
  );
};

export default Header;

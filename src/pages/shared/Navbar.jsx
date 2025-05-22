import { menu } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {

  const {user, logout}= useContext(AuthContext)
  const [isAdmin] = useAdmin()

  const menuLinks = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/available_camps"}>Available Camps</NavLink></li>
  
  </>


const handleLogOut = ()=>{
  logout()
  .then(()=>{})
  .catch((error)=>console.log(error))
}

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {menuLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {menuLinks}
    </ul>
  </div>

{/* navbar end */}
  <div className="dropdown dropdown-end">

      {
        user ? <> <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            {user.displayName}
            <span className="badge">New</span>
          </a>
        </li>
        {
          user && isAdmin && <li><Link to={'/dashboard/admin-profile'}>Dashboard</Link></li>
        }
        {
          user && !isAdmin && <li><Link to={'/dashboard/participant-profile'}>Dashboard</Link></li>
        }
        <li><a onClick={handleLogOut}>Logout</a></li>
      </ul></> : <><Link to={"/login"}><button className='btn btn-accent'>JOIN US</button></Link></>
      }
    </div>


  {/* navbar end */}
</div>
        </div>
    );
};

export default Navbar;
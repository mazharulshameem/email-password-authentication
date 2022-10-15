import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="">
      {/* <Nav className="justify-content-center text-decoration-none ">
        <NavLink to="/login"> Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </Nav> */}

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
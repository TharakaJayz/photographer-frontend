import React from "react";
import { Link, NavLink } from "react-router-dom";

interface Props {}

const AdminSideBar = (props: Props) => {
  return (
    <div className="w-vw15 h-vh100 bg-gray-100 flex flex-col gap-vh2 justify-center items-end pl-vw2">
      <NavLink
        to="/admin/home/slider"
        className={({ isActive }) =>
          isActive ? "py-1 border-b border-b-gray-500 w-full" : "py-1 w-full"
        }
      >
        Slider Images
      </NavLink>

      {/* <NavLink
        to="/admin/home/header"
        className={({ isActive }) =>
          isActive ? "py-1 border-b border-b-gray-500 w-full" : "py-1 w-full"
        }
      > 
        Header Images
      </NavLink> */}
      <NavLink
        to="/admin/home/album"
        className={({ isActive }) =>
          isActive ? "py-1 border-b border-b-gray-500 w-full" : "py-1 w-full"
        }
      >
        Add Album
      </NavLink>
    </div>
  );
};

export default AdminSideBar;

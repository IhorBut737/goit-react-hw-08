import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.navigation}>
      <NavLink to="/login" className={setActiveClass}>
        Log In
      </NavLink>
      <NavLink to="/register" className={setActiveClass}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;

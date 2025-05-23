import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.navigation}>
      <NavLink to="/" className={setActiveClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={setActiveClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main className={s.main}>{children}</main>
    </>
  );
};

export default Layout;

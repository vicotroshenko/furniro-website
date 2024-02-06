import HeaderMain from "../Header/HeaderMain/HeaderMain";
import FooterMain from "../Footer/FooterMain/FooterMain";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <HeaderMain />
      <main>
        <Outlet />
      </main>
      <FooterMain />
    </>
  );
};

export default SharedLayout;

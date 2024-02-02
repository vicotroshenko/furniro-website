import HeaderMain from "../Header/HeaderMain/HeaderMain";
import FooterMain from "../Footer/FooterMain/FooterMain";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

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

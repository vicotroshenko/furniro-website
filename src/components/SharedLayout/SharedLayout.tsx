import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import HeaderMain from "../Header/HeaderMain/HeaderMain";
import FooterMain from "../Footer/FooterMain/FooterMain";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <HeaderMain />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <FooterMain />
    </>
  );
};

export default SharedLayout;

import { CircularProgress, Grid, Container } from "@mui/material";
import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "../utils/style/GlobaleStyle";
import MainLoader from "./atom/MainLoader";

export const MainLayout = (props: Props) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {
        !props.isHeaderHidden && <Header />
      }
      <Suspense fallback={<MainLoader />}>
        <Outlet />
      </Suspense>
      {
        !props.isFooterHidden && <Footer />
      }
    </React.Fragment>
  );
};

type Props = {
  isFooterHidden?: boolean;
  isHeaderHidden?: boolean;
};

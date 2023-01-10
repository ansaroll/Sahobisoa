import { Box, CircularProgress, CssBaseline, Grid, useTheme } from "@mui/material"
import React, { Suspense, useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";

export const MainLayout = (props: Props) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <Suspense fallback={<CircularProgress />}>
                <Grid container>
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Suspense>
        </React.Fragment>
        
    );
}

type Props = {
    isFooterHidden?: boolean
}

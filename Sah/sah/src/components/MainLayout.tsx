import { Box, CircularProgress, CssBaseline, Grid, useTheme, Container } from "@mui/material"
import React, { Suspense, useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";

export const MainLayout = (props: Props) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <Suspense fallback={<CircularProgress />}>
                <Container>
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                </Container>
            </Suspense>
        </React.Fragment>
        
    );
}

type Props = {
    isFooterHidden?: boolean
}

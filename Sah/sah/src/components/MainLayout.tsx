import { CircularProgress, CssBaseline, Grid, Container } from "@mui/material"
import React, { Suspense} from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer"

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
            <Footer/>
        </React.Fragment>
        
    );
}

type Props = {
    isFooterHidden?: boolean
}

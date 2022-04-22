import React from "react";
import  Head  from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Ecommarce nextjs</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Ecommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>
          {children}
      </Container>
      <footer>
          <Typography>@Copy Right Ecommerce</Typography>
      </footer>
    </div>
  );
};

export default Layout;

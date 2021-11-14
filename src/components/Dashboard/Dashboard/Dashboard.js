import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "./../../../hooks/useAuth";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import ManageAllOrder from "./../ManageAllOrder/ManageAllOrder";
import Review from "./../Review/Review";
import MyOrder from "./../MyOrder/MyOrder";
import AddProduct from "../AddProduct/AddProduct";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AdminRoute from "../../AdminRoute/AdminRoute";
import "./Dashboard.css";
const drawerWidth = 200;
function Dashboard(props) {
  const { user, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
      <br />
      <Link to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </Link>

      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/manageallorder`}>
            <Button color="inherit">Manage All Order</Button>
          </Link>
          <br />
          <Link to={`${url}/addproduct`}>
            <Button color="inherit">Manage product</Button>
          </Link>
          <br />
        </Box>
      )}
      {!admin && (
        <Box>
          <Link to={`${url}/myorder`}>
            <Button color="inherit">My Order</Button>
          </Link>
          <Link to={`${url}/payment`}>
            <Button color="inherit">Payment System</Button>
          </Link>
          <Link to={`${url}/review`}>
            <Button color="inherit">Review</Button>
          </Link>
        </Box>
      )}
      <Link to="/">
        <Button color="inherit" onClick={logout}>
          Log Out
        </Button>
      </Link>
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="dashboard">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageallorder`}>
            <ManageAllOrder />
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct />
          </AdminRoute>

          {/* <PrivateRoute path={`${path}/review`}>
            <Review />
          </PrivateRoute>
          <PrivateRoute path={`${path}/payment`}>
            <Payment />
          </PrivateRoute>
          <PrivateRoute path={`${path}/myorder`}>
            <MyOrder />
          </PrivateRoute> */}
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

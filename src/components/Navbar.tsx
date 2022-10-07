import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ERPLYLogo from "../assets/svg/ERPLYLogo";
import * as ROUTES from "../configs/RouterConfig";
import { LOGIN_INFO_UPDATE } from "../store/actionsName";
import { RootState } from "../store/store";

const Navbar = () => {
  const auth = useSelector((state: RootState) => state.loginReducer.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signHandler = () => {
    navigate(ROUTES.LOGIN);
    if (auth) {
      dispatch({
        type: LOGIN_INFO_UPDATE,
        payload: null,
      });
    }
  };

  return (
    <AppBar position={"fixed"} sx={{ background: "#fdbc11" }}>
      <Toolbar disableGutters sx={{ px: 6 }}>
        <ERPLYLogo width={"70"} />
        <Box
          onClick={signHandler}
          sx={{
            flexGrow: 0,
            marginLeft: "auto",
            cursor: "pointer",
            color: "#000000",
          }}
        >
          <p>{auth ? "Sign out" : "Sign in"}</p>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

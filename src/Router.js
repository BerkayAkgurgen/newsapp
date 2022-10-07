import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Login, News } from "./components";
import Navbar from "./components/Navbar";
import * as ROUTES from "./configs/RouterConfig";

const RoutePages = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
        <Route
          exact
          path={ROUTES.MAIN}
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<Box sx={{ mt: "80px" }}>There's nothing here: 404!</Box>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePages;

export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.loginReducer.login);
  if (!auth) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};

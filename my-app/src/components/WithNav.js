import React from "react";
import Navbar from "./Navigation/navbar";
import { Outlet } from "react-router";

function WithNav() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default WithNav;

import "./index.css";
import { Outlet } from "react-router-dom";
import "flowbite";

import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

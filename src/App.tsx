import "./index.css";
import "flowbite";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Features/Home/Home";
import Layout from "./Layout";
import Shop from "./Features/shop/Shop";
import DataProvider from "./context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;

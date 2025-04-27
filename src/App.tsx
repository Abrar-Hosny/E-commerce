import "./index.css";
import "flowbite";
import { BrowserRouter , Routes , Route } from "react-router-dom";



import Home from "./Home";
import Layout from "./Layout";
import Shop from "./Shop";

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
<Route path="/"  element={<Layout/>}>
<Route index element={<Home/>} />
<Route path="/shop" element={<Shop/>} />


</Route>
  
  </Routes>
  
  </BrowserRouter>
     
    </>
  );
}

export default App;

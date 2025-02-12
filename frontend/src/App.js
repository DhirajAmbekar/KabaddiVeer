
import React from "react";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

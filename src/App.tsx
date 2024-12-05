import { BrowserRouter,  Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/About";
import Header from "./Layouts/Header"; 
import HeaderApi from "./Layouts/HeaderApi";
import Pokemon from "./pages/Api/Pokemon";
import Ricky from "./pages/Api/Ricky";
import Store from "./pages/Api/Store";


function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route  element={<Header/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="apis" element={<HeaderApi/>}>
            <Route index element={<Pokemon/>} />
            <Route path="ricky" element={<Ricky/>} />
            <Route path="store" element={<Store/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

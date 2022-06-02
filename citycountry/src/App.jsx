import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CountryTable from "./components/CountryTable";
import { NavLink, Route, Routes } from "react-router-dom";
import AddCountry from "./components/AddCountry";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar bg-light ">
        <form className="container-fluid justify-content-end d-flex gap-3" >
          <NavLink to="/" >Display Country</NavLink>
           <NavLink to="/add-country">Add Country</NavLink>
           
           <input type="text" placeholder="Filter Country By Country" />
        </form>
      </nav>
      <Routes>
        <Route path="/" element={<CountryTable />}></Route>
        <Route path="/add-country" element={<AddCountry />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import Customer from "../pages/Customer";
import Item from "../pages/Item";

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/item" element={<Item />} />
            <Route path="/dashboard" element={<Dashboard/> }/>
        </Routes>
    )

}

export default Routing;
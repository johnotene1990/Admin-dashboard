import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../dashboard/dashboard';
import Sidebar from '../sidebar/siderbar';
import FAQ from "../pages/Faq";
import Contact from "../pages/contact";
import Register from "../pages/register";
import Login from "../pages/login";
import Error404 from "../pages/errorpage";
import Blank from "../pages/blankpage";
import Alerts from "../alert/alerts";
import Cards from "../sidebar/card";
import FormElements from "../sidebar/formelement";
import FormLayouts from "../sidebar/formlayout";
import GeneralTables from "../sidebar/generalTable";
import DataTables from "../sidebar/dataTable";
import Remixicon from "../sidebar/remixicon";
import Bootstrapicon from "../sidebar/bootstrapicon";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import ApexChart from '../sidebar/apexchart';
import Chart from '../sidebar/chart';
// import Footer from '../home/footer';
// import Navbar from '../navbar/navbar';
// import Home from '../home/home';


function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div>
     {/* <Navbar
    sidebarToggle={sidebarToggle}
    setSidebarToggle={setSidebarToggle}/> */}
    <Router>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
   

        <Routes>
          {/* Components */}
          <Route />
          <Route path='/' element={<Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle} />} />

          <Route path="/alerts" element={<Alerts />} />
          <Route path="/card" element={<Cards />} />

          {/* Forms */}
          <Route path="/formelement" element={<FormElements />} />
          <Route path="/formlayout" element={<FormLayouts />} />

          {/* chart */}
          <Route path="/chart" element={<Chart />} />
          <Route path="/apexchart" element={<ApexChart/>} />

          {/* Tables */}
          <Route path="/generalTable" element={<GeneralTables />} />
          <Route path="/dataTable" element={<DataTables />} />
          {/* Icons */}
          <Route path="/remixicon" element={<Remixicon />} />
          <Route path="/bootstrapicon" element={<Bootstrapicon />} />

          {/* Profile, FAQ, Contact */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authentication */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Miscellaneous */}
          <Route path="/404" element={<Error404 />} />
          <Route path="/blank" element={<Blank />} />
        </Routes>
        <Outlet />
      </div>
    </Router>
    {/* <Footer /> */}
    
    </div>




  );
}

export default App;

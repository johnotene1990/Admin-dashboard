// import React from "react";
// import {
//   FaTachometerAlt,
//   FaCogs,
//   FaWpforms,
//   FaTable,
//   FaChartBar,
//   FaIcons,
//   FaUser,
//   FaQuestionCircle,
//   FaEnvelope,
//   FaUserPlus,
//   FaSignInAlt,
//   FaExclamationTriangle,
//   FaFile,
//   FaChevronDown,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Sidebar = ({ sidebarToggle }) => {
//   return (
//     <div
//       className={`${
//         sidebarToggle ? "hidden" : "block"
//       } shadow-xl w-64 bg-white fixed h-full px-4 py-2 overflow-y-auto`}
//     >
//       <div className="my-2 mb-4 flex">
//         <img
//           src="/asset/logo.jpeg"
//           className="ml-3 gap-x-40 font-bold"
//           alt="Logo"
//         />
//         <h1 className="text-2xl text-blue-900 font-bold ml-3 h-10">NiceAdmin</h1>
//       </div>
//       <hr />
//       <ul className="mt-3 text-blue-900 font-bold">
//         {/* Dashboard */}
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2">
//           <Link to="/dashboard" className="px-3 flex items-center text-blue-900">
//             <FaTachometerAlt className="inline-block w-6 h-6 mr-2" />
//             Dashboard
//           </Link>
//         </li>

//         {/* Components */}
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
//           <div className="px-3 flex items-center justify-between text-blue-900">
//             <FaCogs className="inline-block w-6 h-6 m-2" />
//             <span>Comp</span>
//             <FaChevronDown className="inline-block w-4 h-4 ml-2" />
//           </div>
//           <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
//             <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
//               <Link to="/alerts">Alerts</Link>
//             </li>
//             <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
//               <Link to="/cards">Cards</Link>
//             </li>
//           </ul>
//         </li>

//         {/* Forms */}
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
//           <div className="px-3 flex items-center justify-between text-blue-900">
//             <FaWpforms className="inline-block w-6 h-6 mr-2" />
//             <span>Forms</span>
//             <FaChevronDown className="inline-block w-4 h-4 ml-2" />
//           </div>
//           <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
//             <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
//               <Link to="/form-elements">Form Elements</Link>
//             </li>
//             <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
//               <Link to="/form-layouts">Form Layouts</Link>
//             </li>
//           </ul>
//         </li>

//         {/* Tables */}
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
//           <div className="px-3 flex items-center justify-between text-blue-900">
//             <FaTable className="inline-block w-6 h-6 mr-2" />
//             <span>Tables</span>
//             <FaChevronDown className="inline-block w-4 h-4 ml-2" />
//           </div>
//           <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
//             <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
//               <Link to="/general-tables">General Tables</Link>
//             </li>
//             <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
//               <Link to="/data-tables">Data Tables</Link>
//             </li>
//           </ul>
//         </li>

//         {/* Additional Pages */}
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
//           <Link to="/profile" className="px-3 flex items-center text-blue-900">
//             <FaUser className="inline-block w-6 h-6 mr-2" />
//             Profile
//           </Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
//           <Link to="/faq" className="px-3 flex items-center text-blue-900">
//             <FaQuestionCircle className="inline-block w-6 h-6 mr-2" />
//             FAQ
//           </Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
//           <Link to="/contact" className="px-3 flex items-center text-blue-900">
//             <FaEnvelope className="inline-block w-6 h-6 mr-2" />
//             Contact
//           </Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
//           <Link to="/register" className="px-3 flex items-center text-blue-900">
//             <FaUserPlus className="inline-block w-6 h-6 mr-2" />
//             Register
//           </Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
//           <Link to="/login" className="px-3 flex items-center text-blue-900">
//             <FaSignInAlt className="inline-block w-6 h-6 mr-2" />
//             Login
//           </Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
//           <Link to="/404" className="px-3 flex items-center text-blue-900">
//             <FaExclamationTriangle className="inline-block w-6 h-6 mr-2" />
//             Error 404
//           </Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
//           <Link to="/blank" className="px-3 flex items-center text-blue-900">
//             <FaFile className="inline-block w-6 h-6 mr-2" />
//             Blank
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;







import {
  FaTachometerAlt,
  FaCogs,
  FaWpforms,
  FaTable,
  FaChartBar,
  FaIcons,
  FaUser,
  FaQuestionCircle,
  FaEnvelope,
  FaUserPlus,
  FaSignInAlt,
  FaExclamationTriangle,
  FaFile,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`${sidebarToggle ? "hidden" : "block"
        } shadow-xl w-64 bg-white fixed h-full px-4 py-2 overflow-y-auto`}
    >
      <div className="my-2 mb-4 flex">
        <img
          src="/asset/logo.jpeg"
          className="ml-3 gap-x-40 font-bold"
          alt=""
        />
        <h1 className="text-2xl text-blue-900 font-bold ml-3 h-10">
          NiceAdmin
        </h1>
      </div>
      <hr />
      <ul className="mt-3 text-blue-900 font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2">
        <a href="" className="text-[#191919] text-xl font-semibold hover:text-blue-500"><Link to="/"><FaTachometerAlt className="inline-block w-6 h-6 mr-2" />Dashboard</Link></a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
        <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500 px-3 flex items-center justify-between"id="componentsDropdown">
        <Link><FaCogs className="inline-block w-6 h-6 mr-2" /><span>Comps</span></Link>
          <FaChevronDown className="inline-block w-4 h-4 ml-2" /></a>
          <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
            <li>
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/alerts">Alerts</Link></a>
            </li>
            <li>
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/card">Cards</Link></a>
         
            </li>
          </ul>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
        <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500 px-3 flex items-center justify-between"id="formsDropdown">
        <Link><FaWpforms className="inline-block w-6 h-6 mr-2" /><span>Forms</span></Link>
          <FaChevronDown className="inline-block w-4 h-4 ml-2" /></a>
          
          {/* <a
            href="#"
            className="px-3 flex items-center justify-between text-blue-900"
            id="formsDropdown"
          >
            <FaWpforms className="inline-block w-6 h-6 mr-2" />
            <span>Forms</span>
            <FaChevronDown className="inline-block w-4 h-4 ml-2" />
          </a> */}
          <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/formelement">Form Elements</Link></a>
              {/* <a href="/formelement">Form Elements</a> */}
            </li>
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/formlayout">Form Layouts</Link></a>
              {/* <a href="/formlayout">Form Layouts</a> */}
            </li>
          </ul>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
        <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500 px-3 flex items-center justify-between"id="tablesDropdown">
        <Link><FaTable className="inline-block w-6 h-6 mr-2" /><span>Tables</span></Link>
          <FaChevronDown className="inline-block w-4 h-4 ml-2" /></a>
          {/* <a href="#"
            className="px-3 flex items-center justify-between text-blue-900"
            id="tablesDropdown">
            <FaTable className="inline-block w-6 h-6 mr-2" />
            <span>Tables</span>
            <FaChevronDown className="inline-block w-4 h-4 ml-2" />
          </a> */}
          <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/generalTable">General Tables</Link></a>
              {/* <a href="/generalTable">General Tables</a> */}
            </li>
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/dataTable">Data Tables</Link></a>
              {/* <a href="dataTable">Data Tables</a> */}
            </li>
          </ul>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
        <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500 px-3 flex items-center justify-between"id="tablesDropdown">
        <Link><FaChartBar className="inline-block w-6 h-6 mr-2" /><span>Charts</span></Link>
          <FaChevronDown className="inline-block w-4 h-4 ml-2" /></a>
         
          <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/apexchart">ApexCharts</Link></a>
              {/* <a href="/apexchart">ApexCharts</a> */}
            </li>
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/chart">Charts.js</Link></a>
              {/* <a href="/chart">Chart.js</a> */}
            </li>
          </ul>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 group">
        <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500 px-3 flex items-center justify-between"id="iconsDropdown">
        <Link><FaIcons className="inline-block w-6 h-6 mr-2" /><span>Icons</span></Link>
          <FaChevronDown className="inline-block w-4 h-4 ml-2" /></a>
          {/* <a
            href="#"
            className="px-3 flex items-center justify-between text-blue-900"
            id="iconsDropdown"
          >
            <FaIcons className="inline-block w-6 h-6 mr-2" />
            <span>Icons</span>
            <FaChevronDown className="inline-block w-4 h-4 ml-2" />
          </a> */}
          <ul className="hidden group-hover:block bg-white shadow-lg rounded mt-2">
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/bootstrapicon">Bootstrap Icons</Link></a>
              {/* <a href="/bootstrapicon">Bootstrap Icons</a> */}
            </li>
            <li className="px-3 py-2 hover:bg-gray-200 text-blue-900">
            <a href="" className="text-[#191919] text-x font-semibold hover:text-blue-500"><Link to="/remixicon">Remix Icons</Link></a>
              {/* <a href="remixicon">Remix Icons</a> */}
            </li>
          </ul>
        </li>
        <br />
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
        <a href="" className="text-[#191919] text-xl font-semibold hover:text-blue-500"><Link>Pages</Link></a>
          {/* <a
            href="#"
            className="px-3 flex items-center font-bold text-blue-900"
          >
            Page
          </a> */}
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
          <a href="#" className="px-3 flex items-center text-blue-900">
            <FaUser className="inline-block w-6 h-6 mr-2" />
            Profile
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
          <a href="#" className="px-3 flex items-center text-blue-900">
            <FaQuestionCircle className="inline-block w-6 h-6 mr-2" />
            FAQ
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
          <a href="#" className="px-3 flex items-center text-blue-900">
            <FaEnvelope className="inline-block w-6 h-6 mr-2" />
            Contact
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
          <a href="#" className="px-3 flex items-center text-blue-900">
            <FaUserPlus className="inline-block w-6 h-6 mr-2" />
            Register
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
          <a href="#" className="px-3 flex items-center text-blue-900">
            <FaSignInAlt className="inline-block w-6 h-6 mr-2" />
            Login
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
          <a href="#" className="px-3 flex items-center text-blue-900">
            <FaExclamationTriangle className="inline-block w-6 h-6 mr-2" />
            Error 404
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
          <a href="#" className="px-3 flex items-center text-blue-900">
            <FaFile className="inline-block w-6 h-6 mr-2" />
            Blank
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

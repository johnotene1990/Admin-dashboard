import React from "react";
import {
  FaShoppingCart,
  FaDollarSign,
  FaUser,
  FaHistory,
} from "react-icons/fa";
import "./home.css"; // Import the CSS file
import Report from "../home/report.js";
import RadarChart from "../home/Radarchart";
import RecentSales from "./recentsales.js";
import Websitetraffic from "../home/Websitetraffic.js";
import TopSelling from "./Topselling.js";
import NewsUpdates from "./newsandupdate.js";
import Footer from "./footer.js";

const Home = () => {
  return (
    <div className="container">
      <h3 className="header">Dashboard</h3>
      <h4 className="subheader">Home/Dashboard</h4>
      <div className="grid">
        <div className="salescard">
          <div className="card-header">Sales | Today</div>
          <div className="card-options">
            <span className="text-gray-500">•••</span>
          </div>
          <div className="flex mt-10">
            <div className="card-icon">
              <FaShoppingCart className="inline-block text-blue-600 rounded-2xl ml-2" />
            </div>
            <div className="ml-2 px-2">
              <div className="card-value">145</div>
              <div className="card-change">12% increase</div>
            </div>
          </div>
        </div>

        <div className="revenuecard">
          <div className="card-header">Revenue | This Month</div>
          <div className="card-options">
            <span className="text-gray-500">•••</span>
          </div>
          <div className="flex mt-10">
            <div className="card-icon">
              <FaDollarSign className="inline-block text-green-400" />
            </div>
            <div className="ml-2 px-2">
              <div className="card-value">$1,234</div>
              <div className="card-change">8% increase</div>
            </div>
          </div>
        </div>

        <div className="card col-end-4">
          <div className="card-options">
            <span className="text-gray-500">•••</span>
          </div>
          <div className="recent-activity">
            <h5 className="recent-activity-header">Recent Activity | Today</h5>
            <ul className="recent-activity-list">
              <div className="flex">
                <div>32min</div>
                <div className="ml-8">
                  Quia quae rerum explicabo officiis beatae
                </div>
              </div>
              <div className="flex mt-6">
                <div>56min</div>
                <div className="ml-8">
                  Voluptatem blanditiis blanditiis eveniet
                </div>
              </div>
              <div className="flex mt-6">
                <div>2hrs</div>
                <div className="ml-8">
                  Voluptates corrupti molestias voluptatem
                </div>
              </div>
              <div className="flex mt-6">
                <div>1day</div>
                <div className="ml-8">
                  Tempore autem saepe occaecati voluptatem tempore
                </div>
              </div>
              <div className="flex mt-6">
                <div>2days</div>
                <div className="ml-8">
                  Est sit eum reiciendis exercitationem
                </div>
              </div>
              <div className="flex mt-6">
                <div>4 weeks</div>
                <div className="ml-8">
                  Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <div className=" customercard">
            <div className="card-header">Customers | This Year</div>
            <div className="card-options">
              <span className="text-gray-500">•••</span>
            </div>
            <div className="flex mt-10">
              <div className="card-icon">
                <FaUser className="inline-block text-orange-400" />
              </div>
              <div className="ml-2 px-2">
                <div className="card-value">1,234</div>
                <div className="card-change">5% increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-2 ml-3">
        <div className="bg-white w-4/5 p-4 rounded-lg">
          <Report />
        </div>
        <div className="bg-white p-3 w-2/2 rounded-lg">
          <RadarChart />
        </div>
      </div>
      <div className=" flex gap-2 mt-2">
        <div className=" w-4/4 p-4  rounded-lg">
          <RecentSales/>
        </div>
        <div className="p-3 w-2/2 rounded-lg">
          <Websitetraffic />
        </div>
      </div>
      <div className=" flex gap-2 mt-2">
        <div className=" w-5/5 p-2 rounded-lg"> 
          <TopSelling/>
        </div>
        <div className="ml-10 mt-none">
          <NewsUpdates/>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default Home;

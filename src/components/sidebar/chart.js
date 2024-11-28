import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md">
      <h2 className="p-4 font-bold">Sidebar</h2>
    </aside>

    <div className="flex-1 relative h-full p-8  bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Charts</h1>
        <p className="text-sm text-gray-500">Home | Charts | Chart.js</p>
        <p className="text-sm text-gray-700 mt-2">
        Chart.JS Examples. You can check the official website for more examples.
          <a
            href="https://apexcharts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            official website
          </a>{" "}
          for more examples.
        </p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Line Chart */}
        {/* <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Line Chart</h2>
          <Chart
            type="line"
            series={[{ name: "Sales", data: [10, 20, 15, 25, 30, 35, 40] }]}
            options={{
              chart: { id: "line-chart" },
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
              colors: ["#34D399"],
            }}
          />
        </div> */}

        {/* Area Chart */}
        {/* <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Area Chart</h2>
          <Chart
            type="area"
            series={[{ name: "Profit", data: [5, 15, 10, 20, 15, 25, 30] }]}
            options={{
              chart: { id: "area-chart" },
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
              colors: ["#60A5FA"],
            }}
          />
        </div> */}

        {/* Column Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Column Chart</h2>
          <Chart
            type="bar"
            series={[{ name: "Revenue", data: [30, 40, 25, 50, 40, 60, 70] }]}
            options={{
              chart: { id: "column-chart" },
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
              colors: ["#FBBF24"],
            }}
          />
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Bar Chart</h2>
          <Chart
            type="bar"
            series={[{ name: "Users", data: [50, 30, 40, 70, 20, 60, 90] }]}
            options={{
              chart: { id: "bar-chart" },
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
              colors: ["#E879F9"],
            }}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Pie Chart</h2>
          <Chart
            type="pie"
            series={[20, 30, 25, 25]}
            options={{
              labels: ["Product A", "Product B", "Product C", "Product D"],
              colors: ["#F472B6", "#10B981", "#3B82F6", "#F59E0B"],
            }}
          />
        </div>

        {/* Donut Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Donut Chart</h2>
          <Chart
            type="donut"
            series={[35, 25, 20, 20]}
            options={{
              labels: ["North", "South", "East", "West"],
              colors: ["#A78BFA", "#F87171", "#34D399", "#60A5FA"],
            }}
          />
        </div>

        {/* Radar Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Radar Chart</h2>
          <Chart
            type="radar"
            series={[
              { name: "Budget", data: [80, 50, 30, 40, 100, 20] },
              { name: "Spending", data: [20, 30, 40, 80, 20, 80] },
            ]}
            options={{
              labels: ["Marketing", "Sales", "Development", "Support", "HR", "Finance"],
            }}
          />
        </div>

        {/* Polar Area Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Polar Area Chart</h2>
          <Chart
            type="polarArea"
            series={[14, 23, 21, 17, 15]}
            options={{
              labels: ["Apples", "Oranges", "Bananas", "Pears", "Grapes"],
              colors: ["#6EE7B7", "#93C5FD", "#FCA5A5", "#FCD34D", "#D8B4FE"],
            }}
          />
        </div>

        {/* Radial Bar Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Radial Bar Chart</h2>
          <Chart
            type="radialBar"
            series={[70, 60, 80, 90]}
            options={{
              labels: ["Team A", "Team B", "Team C", "Team D"],
              colors: ["#818CF8", "#F87171", "#34D399", "#FBBF24"],
            }}
          />
        </div>

        {/* Bubble Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Bubble Chart</h2>
          <Chart
            type="bubble"
            series={[
              { name: "Series 1", data: [[10, 20, 15], [15, 25, 20], [20, 30, 25]] },
            ]}
            options={{
              xaxis: { categories: ["X", "Y", "Z"] },
              colors: ["#F87171"],
            }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Charts;

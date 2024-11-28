import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const data = {
        series: [484, 300, 1048, 735, 580],
        options: {
            chart: {
                type: "donut",
            },
            labels: [
                "Acess from Union Ads",
                "Video Ads",
                "Search Engine",
                "Direct",
                "Email",
            ],
            colors: ["#FF0000", "#0000FF", "#00008B", "#008000", "#FFFF00"],
            legend: {
                position: "top",
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "top-center",
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="relative bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Website Traffic | Today</h2>
            </div>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="donut"
                height={350}
            />
        </div>
    );
};

export default PieChart;
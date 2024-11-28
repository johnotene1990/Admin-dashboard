import React from "react";

const DefaultAndStripedTables = () => {
    const data = [
        { id: 1, name: "John Doe", position: "Developer", age: 29, startDate: "2019-01-15" },
        { id: 2, name: "Jane Smith", position: "Designer", age: 35, startDate: "2018-03-12" },
        { id: 3, name: "Paul Brown", position: "Manager", age: 42, startDate: "2015-06-10" },
        { id: 4, name: "Emily Davis", position: "QA Engineer", age: 27, startDate: "2020-11-05" },
        { id: 5, name: "Michael Wilson", position: "Product Owner", age: 38, startDate: "2017-09-20" },
    ];

    return (
        <div className="flex h-screen bg-gray-100 w-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <h2 className="p-4 font-bold">Sidebar</h2>
            </aside>
            <div className="flex-1 relative h-full p-8 bg-gray-100 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">Tables</h1>
                    <p className="text-sm text-gray-500"> Home | Tables | General</p>
                </div>


                {/* Default Table */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Default Table</h2>
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full text-left border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border-b border-gray-300">#</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Name</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Position</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Age</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.id}>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.id}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.name}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.position}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.age}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.startDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Striped Rows Table */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Table with Striped Rows</h2>
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full text-left border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border-b border-gray-300">#</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Name</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Position</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Age</th>
                                    <th className="px-4 py-2 border-b border-gray-300">Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={row.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.id}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.name}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.position}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.age}</td>
                                        <td className="px-4 py-2 border-b border-gray-300">{row.startDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultAndStripedTables;

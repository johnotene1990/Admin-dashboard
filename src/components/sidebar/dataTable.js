import React, { useState } from "react";

const data = [
    { name: "Carissa Lara", ext: "3241", city: "Sherborne", startDate: "2015/07/12", completion: "72%" },
    { name: "Hammett Gordon", ext: "8101", city: "Wah", startDate: "1998/06/09", completion: "20%" },
    { name: "Walker Nixon", ext: "6901", city: "Metz", startDate: "2011/12/11", completion: "41%" },
    { name: "Nathan Espinoza", ext: "5956", city: "Strathcona County", startDate: "2002/01/25", completion: "47%" },
    { name: "Kelly Cameron", ext: "4836", city: "Fontaine-Valmont", startDate: "1999/02/07", completion: "24%" },
    { name: "Kyra Moses", ext: "3796", city: "Quenast", startDate: "1998/07/07", completion: "68%" },
    { name: "Nora Craig", ext: "7453", city: "Cedar Rapids", startDate: "2008/09/14", completion: "89%" },
    { name: "Paul Bell", ext: "2346", city: "Sunnyvale", startDate: "2003/11/20", completion: "53%" },
    { name: "Lisa Smith", ext: "9103", city: "Melbourne", startDate: "2006/02/28", completion: "76%" },
    { name: "John Doe", ext: "5672", city: "New York", startDate: "2010/03/15", completion: "36%" },
    { name: "Jane Roe", ext: "6783", city: "Los Angeles", startDate: "2012/05/20", completion: "64%" },
    { name: "Tom Fox", ext: "4829", city: "Dallas", startDate: "2016/12/25", completion: "92%" },
    // Add more rows to test pagination
];

const TableWithPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="flex h-screen bg-gray-100 w-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <h2 className="p-4 font-bold">Sidebar</h2>
            </aside>

            <div className="flex-1 relative h-full p-8 bg-gray-100 min-h-screen w-screen">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">Data Tables</h1>
                    <p className="text-sm text-gray-500"> Home | Tables | Data</p>
                </div>
                <p className="mb-4 text-sm text-gray-500">
                    Add lightweight datatables to your project using the Simple DataTables library.
                </p>
                <div className="bg-white shadow-md rounded-lg p-4">
                    {/* Table Header */}
                    <div className="flex justify-between mb-4">
                        <div>
                            <label>
                                <select className="border border-gray-300 rounded-md p-2">
                                    <option value="10">10 entries per page</option>
                                    <option value="25">25 entries per page</option>
                                    <option value="50">50 entries per page</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-2 text-left">Name</th>
                                <th className="border border-gray-300 p-2 text-left">Ext.</th>
                                <th className="border border-gray-300 p-2 text-left">City</th>
                                <th className="border border-gray-300 p-2 text-left">Start Date</th>
                                <th className="border border-gray-300 p-2 text-left">Completion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, index) => (
                                <tr key={index} className="even:bg-gray-50">
                                    <td className="border border-gray-300 p-2">{row.name}</td>
                                    <td className="border border-gray-300 p-2">{row.ext}</td>
                                    <td className="border border-gray-300 p-2">{row.city}</td>
                                    <td className="border border-gray-300 p-2">{row.startDate}</td>
                                    <td className="border border-gray-300 p-2">{row.completion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableWithPagination;

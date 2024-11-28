import React, { useState } from 'react';

const salesData = [
  { id: 2457, customer: 'Brandon Jacob', product: 'At praesentium minu', price: 64, status: 'Approved' },
  { id: 2147, customer: 'Bridie Kessler', product: 'Blanditiis dolor omnis similique', price: 47, status: 'Pending' },
  { id: 2049, customer: 'Ashleigh Langosh', product: 'At recusandae consectetur', price: 147, status: 'Approved' },
  { id: 2644, customer: 'Angus Grady', product: 'Ut voluptatem id earum et', price: 67, status: 'Rejected' },
  { id: 2644, customer: 'Raheem Lehner', product: 'Sunt similique distinctio', price: 165, status: 'Approved' },
  // Add more data as needed
];

const statusStyles = {
  Approved: 'text-green-700 bg-green-200',
  Pending: 'text-yellow-700 bg-yellow-200', 
  Rejected: 'text-red-700 bg-red-200',
};
function RecentSales() {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = salesData.filter(
    (sale) =>
      sale.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Sales | Today</h2>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="entries" className="text-sm font-medium mr-2">
            Entries per page
          </label>
          <select
            id="entries"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">#</th>
              <th className="border-b px-4 py-2 text-left">Customer</th>
              <th className="border-b px-4 py-2 text-left">Product</th>
              <th className="border-b px-4 py-2 text-left">Price</th>
              <th className="border-b px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, entriesPerPage).map((sale, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b px-1 py-2 text-blue-500 cursor-pointer">#{sale.id}</td>
                <td className="border-b px-1 py-2">{sale.customer}</td>
                <td className="border-b px-1 py-2">{sale.product}</td>
                <td className="border-b px-1 py-2">${sale.price}</td>
                <td className={`border-b px-1 py-2 rounded ${statusStyles[sale.status]}`}>
                  {sale.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 text-sm text-gray-600">
          Showing 1 to {Math.min(entriesPerPage, filteredData.length)} of {filteredData.length} entries
        </div>
      </div>
    </div>
  );
}

export default RecentSales;

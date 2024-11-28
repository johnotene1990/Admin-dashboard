import React from 'react';
// import Shoe from '../images/shoe.jpg'
// import Cap from '..images/cap.jpg'
import Bic from '../Images/bic.jpg'
import Charger from '../Images/charger.jpg'
import Bodycream from '../Images/bodycream.jpg'
import Earpod from '../Images/earpod.jpg'
import Iphone from '../Images/iphone.jpg'

const TopSelling = () => {
  // Sample data for products
  const products = [
    {
      id: 1,
      image: Bic,
      name: 'Ut inventore ipsa voluptas nulla',
      price: 64,
      sold: 124,
      revenue: 5828,
    },
    {
      id: 2,
      image: Earpod,
      name: 'Exercitationem similique doloremque',
      price: 46,
      sold: 98,
      revenue: 4508,
    },
    {
      id: 3,
      image: Iphone,
      name: 'Doloribus nisi exercitationem',
      price: 59,
      sold: 74,
      revenue: 4366,
    },
    {
      id: 4,
      image: Charger,
      name: 'Officiis quaerat sint rerum error',
      price: 32,
      sold: 63,
      revenue: 2016,
    },
    {
      id: 5,
      image: Bodycream,
      name: 'Sit unde debitis delectus repellendus',
      price: 79,
      sold: 41,
      revenue: 3239,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Top Selling | Today</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2">Preview</th>
            <th className="py-2">Product</th>
            <th className="py-2">Price</th>
            <th className="py-2">Sold</th>
            <th className="py-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="py-2">
                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
              </td>
              <td className="py-2 text-blue-600 font-medium">{product.name}</td>
              <td className="py-2">${product.price}</td>
              <td className="py-2 font-bold">{product.sold}</td>
              <td className="py-2">${product.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSelling;

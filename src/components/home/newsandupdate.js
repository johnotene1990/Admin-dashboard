import React from 'react';
import Image1 from '../Images/image1.png';
import Image2 from '../Images/image2.png';
import Image3 from '../Images/image3.png';
import Image4 from '../Images/image4.png';
import Image5 from '../Images/image5.png';

const NewsUpdates = () => {
  const news = [
    {
      id: 1,
      title: "Nihil blanditiis at in nihil autem",
      description: "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...",
      image: Image1, // Replace with the actual image URL
    },
    {
      id: 2,
      title: "Quidem autem et impedit",
      description: "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...",
      image: Image2, // Replace with the actual image URL
    },
    {
        id: 2,
        title: "Quidem autem et impedit",
        description: "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...",
        image: Image3, // Replace with the actual image URL
    },
    {
        id: 2,
        title: "Quidem autem et impedit",
        description: "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...",
        image: Image4, // Replace with the actual image URL
    },
    {
        id: 2,
        title: "Quidem autem et impedit",
        description: "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...",
        image: Image5, // Replace with the actual image URL
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">News & Updates <span className="text-sm text-gray-500">| Today</span></h2>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="flex items-start">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded object-cover"
            />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-blue-800 hover:underline">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdates;

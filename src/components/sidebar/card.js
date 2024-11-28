import React from "react";

const Card = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-white shadow-md">
        <h2 className="p-4 font-bold">Sidebar</h2>
      </aside>

    <div className="flex-1 relative h-full p-8">
      {/* Default Card */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Default Card</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p>
            Ut in ea error laudantium quas omnis officia. Sit sed praesentium
            voluptas. Corrupti inventore consequuntur nisi necessitatibus modi
            consequatur soluta id. Enim autem est esse natus assumenda.
            Consequatur sint repellendus voluptas.
          </p>
        </div>
      </div>

      {/* Cards with Images and Variants */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Cards with Images and Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card with Image on Top */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Card Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Card with an image on top</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          {/* Card with Image Overlay */}
          <div className="relative bg-cover bg-center shadow-md rounded-lg h-48" style={{ backgroundImage: "url('https://via.placeholder.com/400x200')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-semibold">Card with an image overlay</h3>
            </div>
          </div>

          {/* Card with Titles, Buttons, and Links */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Card with titles, buttons, and links</h3>
            <p className="text-gray-600 mb-4">Card subtitle</p>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Button
            </button>
          </div>

          {/* Additional Card for Consistency */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Another Card Example</h3>
            <p>
              Some additional text content for another card layout.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;

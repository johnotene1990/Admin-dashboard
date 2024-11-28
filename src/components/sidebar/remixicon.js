import React from "react";
import 'remixicon/fonts/remixicon.css';

const RemixIconsDisplay = () => {
  // List of 30 Remix Icon class names
  const icons = [
    "ri-home-line",
    "ri-user-line",
    "ri-settings-line",
    "ri-search-line",
    "ri-calendar-line",
    "ri-heart-line",
    "ri-star-line",
    "ri-file-line",
    "ri-folder-line",
    "ri-camera-line",
    "ri-phone-line",
    "ri-mail-line",
    "ri-lock-line",
    "ri-eye-line",
    "ri-upload-line",
    "ri-download-line",
    "ri-shopping-cart-line",
    "ri-bell-line",
    "ri-chat-line",
    "ri-map-pin-line",
    "ri-book-line",
    "ri-music-line",
    "ri-globe-line",
    "ri-lightbulb-line",
    "ri-shield-line",
    "ri-key-line",
    "ri-cloud-line",
    "ri-wifi-line",
    "ri-battery-line",
    "ri-flag-line",
  ];

  return (
    <div className="flex h-screen bg-gray-100 w-screen">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md">
      <h2 className="p-4 font-bold">Sidebar</h2>
    </aside>

    <div className="flex-1 relative h-full p-8  bg-gray-100 h-screen w-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Remix Icons</h1>
        <p className="text-sm text-gray-500">Home | Icons | Remix</p>
      </div>

      {/* Info Section */}
      <div className="mb-8 bg-white shadow rounded-lg p-6">
        <p className="mb-4 text-gray-700">
          Use the following pattern to add the Remix icons anywhere in your project:
        </p>
        <code className="bg-gray-200 rounded p-2 text-sm block">
          {`<i class="ri-add-line"></i>`}
        </code>
        <p className="mt-4 text-gray-700">
          Replace the bold part with the below icon names. Check the{" "}
          <a
            href="https://remixicon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            official website
          </a>{" "}
          for more info.
        </p>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-6 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-4 hover:shadow-md"
          >
            <i className={`${icon} text-4xl text-blue-500 mb-2`}></i>
            <span className="text-sm font-medium text-gray-700">{icon}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RemixIconsDisplay;

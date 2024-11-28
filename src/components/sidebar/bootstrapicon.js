import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const BootstrapIcons = () => {
  const icons = [
    { name: "alarm-fill", class: "bi-alarm-fill" },
    { name: "alarm", class: "bi-alarm" },
    { name: "align-bottom", class: "bi-align-bottom" },
    { name: "align-center", class: "bi-align-center" },
    { name: "align-end", class: "bi-align-end" },
    { name: "align-middle", class: "bi-align-middle" },
    { name: "align-start", class: "bi-align-start" },
    { name: "align-top", class: "bi-align-top" },
    { name: "arrow-down", class: "bi-arrow-down" },
    { name: "arrow-left", class: "bi-arrow-left" },
    { name: "arrow-right", class: "bi-arrow-right" },
    { name: "arrow-up", class: "bi-arrow-up" },
    { name: "bag-fill", class: "bi-bag-fill" },
    { name: "bag", class: "bi-bag" },
    { name: "bar-chart", class: "bi-bar-chart" },
    { name: "bell-fill", class: "bi-bell-fill" },
    { name: "bell", class: "bi-bell" },
    { name: "bookmark", class: "bi-bookmark" },
    { name: "camera", class: "bi-camera" },
    { name: "check-circle", class: "bi-check-circle" },
    { name: "clipboard", class: "bi-clipboard" },
    { name: "cloud-download", class: "bi-cloud-download" },
    { name: "cloud-upload", class: "bi-cloud-upload" },
    { name: "cup", class: "bi-cup" },
    { name: "emoji-smile", class: "bi-emoji-smile" },
    { name: "file-earmark", class: "bi-file-earmark" },
    { name: "flag", class: "bi-flag" },
    { name: "gear", class: "bi-gear" },
    { name: "heart", class: "bi-heart" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md">
      <h2 className="p-4 font-bold">Sidebar</h2>
    </aside>

    <div className="container flex-1 relative h-full p-8  mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">Bootstrap Icons</h1>
        <p className="text-gray-600">
          Use the following pattern to add the Bootstrap icons to anywhere in
          your project.{" "}
          <code className="bg-gray-100 text-pink-500 px-1 rounded">
            &lt;i class="bi alarm-fill"&gt;&lt;/i&gt;
          </code>{" "}
          Replace the <strong>bold</strong> part with the below icon names. Check the{" "}
          <a
            href="https://icons.getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Official website
          </a>{" "}
          for more info.
        </p>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <i className={`${icon.class} text-4xl text-blue-800 mb-2`}></i>
            <p className="text-sm font-medium text-gray-700">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BootstrapIcons;

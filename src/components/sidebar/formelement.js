import React from "react";

function FormElements() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <h2 className="p-4 font-bold">Sidebar</h2>
      </aside>

      {/* Main Content */}
      <div className="flex-1 relative h-full p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Form Elements</h1>
          <p className="text-sm text-gray-500">Home / Forms / Elements</p>
        </div>

        {/* Forms Section */}
        <div className="flex flex-wrap gap-4">
          {/* Form 1: General Form Elements */}
          <div className="bg-white p-6 rounded-lg shadow flex-1 min-w-[300px]">
            <h2 className="text-lg font-bold mb-4">General Form Elements</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Form 2: Advanced Form Elements */}
          <div className="bg-white p-6 rounded-lg shadow flex-1 min-w-[300px]">
            <h2 className="text-lg font-bold mb-4">Advanced Form Elements</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Switches
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded-full h-5 w-5 text-blue-500 focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-700">Switch</label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Range
                </label>
                <input type="range" className="w-full" />
              </div>
            </div>
          </div>

          {/* Form 3: Dropdown and Textarea */}
          <div className="bg-white p-6 rounded-lg shadow flex-1 min-w-[300px]">
            <h2 className="text-lg font-bold mb-4">Dropdown & Textarea</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dropdown
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Textarea
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Enter details..."
                />
              </div>
            </div>
          </div>

          {/* Form 4: Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow flex-1 min-w-[300px]">
            <h2 className="text-lg font-bold mb-4">Contact Form</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Write your message..."
                />
              </div>
            </div>
          </div>

          {/* Form 5: Feedback Form */}
          <div className="bg-white p-6 rounded-lg shadow flex-1 min-w-[300px]">
            <h2 className="text-lg font-bold mb-4">Feedback Form</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                  max="5"
                  placeholder="Rate from 1 to 5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Suggestions
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your suggestions..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormElements;

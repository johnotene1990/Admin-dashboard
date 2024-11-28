import React from 'react';

function Alerts() {
  return (
    <div className="flex h-screen-full bg-gray-100">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-white shadow-md">
        <h2 className="p-4 font-bold">Sidebar</h2>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative h-full p-8">
        <h1 className="text-2xl font-bold mb-4">Alerts</h1>
        <div className="text-sm text-gray-500 mb-8">Home / Components / Alerts</div>

        {/* Alerts */}
        <div className="grid grid-cols-2 gap-8">
          {/* Default Alerts */}
          <div className='container bg-white'>
            <h2 className="text-lg font-bold mb-4">Default</h2>
            <div className="space-y-8">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-md shadow">
                A simple primary alert—check it out!
              </div>
              <div className="p-3 bg-gray-100 text-gray-700 rounded-md shadow">
                A simple secondary alert—check it out!
              </div>
              <div className="p-3 bg-green-100 text-green-700 rounded-md shadow">
                A simple success alert—check it out!
              </div>
              <div className="p-3 bg-red-100 text-red-700 rounded-md shadow">
                A simple danger alert—check it out!
              </div>
            </div>
          </div>

          {/* Solid Color Alerts */}
          <div className='container bg-white'>
            <h2 className="text-lg font-bold mb-4">Default: Solid Color</h2>
            <div className="space-y-8">
              <div className="p-3 bg-blue-500 text-white rounded-md shadow">
                A simple primary alert with solid color—check it out!
              </div>
              <div className="p-3 bg-gray-500 text-white rounded-md shadow">
                A simple secondary alert with solid color—check it out!
              </div>
              <div className="p-3 bg-green-500 text-white rounded-md shadow">
                A simple success alert with solid color—check it out!
              </div>
              <div className="p-3 bg-red-500 text-white rounded-md shadow">
                A simple danger alert with solid color—check it out!
              </div>
            </div>
          </div>

           {/* Solid Color Alerts */}
           <div className='container bg-white'>
            <h2 className="text-lg font-bold mb-4">Default: Solid Color</h2>
            <div className="space-y-8">
              <div className="p-3 bg-blue-500 text-white rounded-md shadow">
                A simple primary alert with solid color—check it out!
              </div>
              <div className="p-3 bg-gray-500 text-white rounded-md shadow">
                A simple secondary alert with solid color—check it out!
              </div>
              <div className="p-3 bg-green-500 text-white rounded-md shadow">
                A simple success alert with solid color—check it out!
              </div>
              <div className="p-3 bg-red-500 text-white rounded-md shadow">
                A simple danger alert with solid color—check it out!
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Alerts;



// import React from 'react';

// const AlertComponent = () => {
//   const alerts = [
//     { color: 'bg-blue-200', text: 'A simple primary alert—check it out!', solidColor: 'bg-blue-500' },
//     { color: 'bg-gray-200', text: 'A simple secondary alert—check it out!', solidColor: 'bg-gray-500' },
//     { color: 'bg-green-200', text: 'A simple success alert—check it out!', solidColor: 'bg-green-500' },
//     { color: 'bg-red-200', text: 'A simple danger alert—check it out!', solidColor: 'bg-red-500' },
//     { color: 'bg-gray-100', text: 'A simple light alert—check it out!', solidColor: 'bg-gray-300' },
//   ];

//   return (
//     <div className="container">
//       <div className="flex space-x-4 py-4 my-4">
//         <div className="w-full md:w-1/2 lg:w-1/4 m-2 ml-5 ml-20">
//           <h2 className="text-xl font-semibold mb-4">Default</h2>
//           {alerts.map((alert, index) => (
//             <div key={index} className={`${alert.color} p-4 mb-2 rounded flex justify-between items-center`}>
//               <span>{alert.text}</span>
//               <button className="text-gray-600">X</button>
//             </div>
//           ))}
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/4">
//           <h2 className="text-xl font-semibold mb-4">Default Solid Color</h2>
//           {alerts.map((alert, index) => (
//             <div key={index} className={`${alert.solidColor} p-4 mb-2 rounded flex justify-between items-center`}>
//               <span className="text-white">{alert.text}</span>
//               <button className="text-white">X</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlertComponent;

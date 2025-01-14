// import React, { useState, ReactNode } from 'react';
// import Header from '../components/Header/index';
// import Sidebar from '../components/Sidebar/index';



// const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   // const isAuthenticated = false; // Replace with your authentication logic

//   return (
//     <div className="dark:bg-boxdark-2 dark:text-bodydark">
//       {/* <!-- ===== Page Wrapper Start ===== --> */}
//       <div className="flex h-screen overflow-hidden">
//         {/* <!-- ===== Sidebar Start ===== --> */}
//         {/* {isAuthenticated && (
//           <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//         )} */}
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//         {/* <!-- ===== Sidebar End ===== --> */}

//         {/* <!-- ===== Content Area Start ===== --> */}
//         <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
//           {/* <!-- ===== Header Start ===== --> */}
//            {/* {isAuthenticated && (
//             <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//           )} */}
//           <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//           {/* <!-- ===== Header End ===== --> */}

//           {/* <!-- ===== Main Content Start ===== --> */}
//           <main>
//             <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
//               {children}
//             </div>
//           </main>
//           {/* <!-- ===== Main Content End ===== --> */}
//         </div>
//         {/* <!-- ===== Content Area End ===== --> */}
//       </div>
//       {/* <!-- ===== Page Wrapper End ===== --> */}
    

//     </div>
//   );
// };

// export default DefaultLayout;


import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* Page Wrapper */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content Area */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Main Content */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {/* This is where the nested routes will render */}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

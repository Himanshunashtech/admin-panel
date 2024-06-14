import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MiniDrawer from "../components/MiniDrawer"


function DataManagement() {
  return (
    <div className=" flex  overflow-hidden mr-20">
        <MiniDrawer/>

    <div className=" ml-0  flex flex-col justify-center items-center  overscroll-x-none bg-white">
    <h1 className=" text-black text-center">Data Management</h1>
      {/* Add data management content here */}
    </div>
    </div>

  );
}

export default DataManagement;
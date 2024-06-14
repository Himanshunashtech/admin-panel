import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MiniDrawer from "../components/MiniDrawer"


function CommunicationSupport() {
  return (
    <>
    {/* <Navbar/>
    <Sidebar/> */}
        <MiniDrawer/>

    <div className=" ml-0  flex flex-col justify-center items-center  overscroll-x-none bg-white">
    <h1 className=" text-black text-center">Communication & Support</h1>
      {/* Add communication and support content here */}
    </div>
    </>
  );
}

export default CommunicationSupport;
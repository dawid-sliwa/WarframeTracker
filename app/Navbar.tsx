import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" h-screen bg-gray-800 w-[20vw] text-white p-2 sticky left-0 top-0">
      <Link href="/">
        <div className=" w-[100%] flex justify-center p-2 hover:bg-gray-500 rounded-full cursor-pointer">
          <p>Global State and info</p>
        </div>
      </Link>
      <Link href="/alerts">
        <div className=" w-[100%] flex justify-center p-2 hover:bg-gray-500 rounded-full cursor-pointer">
          Alerts
        </div>
      </Link>
      <Link href="/fissures">
        <div className=" w-[100%] flex justify-center p-2 hover:bg-gray-500 rounded-full cursor-pointer">
          Fissures
        </div>
      </Link>
      <Link href="/nightwave">
        <div className=" w-[100%] flex justify-center p-2 hover:bg-gray-500 rounded-full cursor-pointer">
          Nightwave
        </div>
      </Link>
      <Link href="/vt">
        <div className=" w-[100%] flex justify-center p-2 hover:bg-gray-500 rounded-full cursor-pointer">
          Void Trader
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

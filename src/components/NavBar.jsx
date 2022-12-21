import React from "react";

export default function NavBar() {
  return (
    <div className="sticky top-0 bg-slate-100 h-24 w-screen">
      <div className=" grid grid-flow-col-dense items-center sm:gap-5 gap-1 text-center text-slate-700 font-italiana h-full">
        <div className="sm:text-xl">
          <a href="/about">About</a>
        </div>
        <div className="sm:text-xl">
          <a href="/services">Services</a>
        </div>
        <div className="sm:text-xl font-tangerine sm:text-4xl text-2xl">
          <a href="/">Katie DeVault</a>
        </div>
        <div className="sm:text-xl">
          <a href="/contact">Contact</a>
        </div>
        <div className="sm:text-xl">
          <button className="rounded-md bg-slate-300 p-3">Email</button>
        </div>
      </div>
    </div>
  );
}

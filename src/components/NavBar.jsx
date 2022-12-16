import React from "react";
import { NavList } from "data/NavList";

export default function NavBar() {
  return (
    <div className="sticky top-0 bg-slate-100 h-24 w-screen">
      <div className=" grid grid-flow-col items-center gap-5 text-center text-slate-700 font-italiana h-full">
        {NavList.map((nav) => (
          <NavBlock title={nav.title} link={nav.link} key={nav.id} />
        ))}
        {/* <div className="text-xl">
          <a href="/about">About</a>
        </div>
        <div className="text-xl">
          <a href="/services">Services</a>
        </div>
        <div className="">
          <a href="/">
            <h1 className="text-2xl text-slate-700 text-center font-tangerine p-2 drop-shadow-xl sm:text-6xl">
              Katie DeVault
            </h1>
          </a>
        </div>
        <div className="text-xl">
          <a href="/contact">Contact</a>
        </div> */}
        <div className="text-xl">
          <button className="rounded-md bg-slate-300 p-3">Email</button>
        </div>
      </div>
    </div>
  );
}

function NavBlock({ title, link }) {
  return (
    <div className="text-xl">
      <a href={link}>{title}</a>
    </div>
  );
}

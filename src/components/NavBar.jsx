import React from "react";
import { NavList } from "data/NavList";

export default function NavBar() {
  return (
    <div className="sticky top-0 bg-slate-100 h-24 w-screen">
      <div className=" grid grid-flow-col-dense items-center sm:gap-5 text-center text-slate-700 font-italiana h-full">
        {NavList.map((nav) => (
          <NavBlock
            title={nav.title}
            link={nav.link}
            key={nav.id}
            style={nav.css}
          />
        ))}
        <div className="sm:text-xl">
          <button className="rounded-md bg-slate-300 p-3">Email</button>
        </div>
      </div>
    </div>
  );
}

function NavBlock({ title, link, style }) {
  return (
    <div className="text-xl">
      <a style={style} href={link}>
        {title}
      </a>
    </div>
  );
}

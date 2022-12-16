import React from "react";
import MainPic from "images/MainPic.jpg";
import { serviceList } from "data/ServiceList";

export default function Home() {
  return (
    <div className="container mx-auto content-center text-slate-600 divide-y min-h-screen font-italiana min-w-screen">
      <div className="text-center text-slate-700 text-2xl sm:text-3xl p-6">
        <h1>Retail Market Research just for you.</h1>
      </div>
      <img className="mx-auto h-auto w-2/3 pb-3" src={MainPic} alt="" />
      <div className="grid grid-cols-1 text-center divide-y">
        {serviceList.map((service) => (
          <ServiceBlockHome
            title={service.title}
            shortDesc={service.shortDesc}
            key={service.id}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceBlockHome({ title, shortDesc, img }) {
  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-xl">{shortDesc}</p>
      <img className="mx-auto h-auto w-1/2" src={img} alt="" />
    </div>
  );
}

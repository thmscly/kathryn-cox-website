import React from "react";
import { serviceList } from "data/ServiceList";

function Services() {
  return (
    <div className="sm:mr-28 sm:ml-28 m-5 text-slate-800 text-xl">
      <h1 className="text-4xl text-center p-7 underline">What I Do</h1>
      <div className="grid grid-cols-1 text-center divide-y">
        {serviceList.map((service) => (
          <ServiceBlock
            title={service.title}
            text={service.text}
            key={service.id}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
}
//props are in curly brackets because they are destructuring an object
function ServiceBlock({ title, text, img }) {
  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl p-3">{title}</h2>
      <img src={img} alt="" className="float-left w-1/4" />
      <p>{text}</p>
    </div>
  );
}
export default Services;

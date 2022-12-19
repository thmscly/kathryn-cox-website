import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="grid grid-cols-3 justify-items-center text-center h-screen text-slate-800 font-italiana text-2xl mt-20 w-screen">
      <div className="m-3">
        <h2 className="font-bold">Email</h2>
        <p>email@email.com</p>
        <EmailIcon />
      </div>
      <div className="m-3">
        <h2 className="font-bold">Phone</h2>
        <p>(123)456-7890</p>
        <PhoneIphoneIcon />
      </div>
      <div className="m-3">
        <h2 className="font-bold">LinkedIn</h2>
        <p>linkedin.com/totes-profesh-yo</p>
        <LinkedInIcon />
      </div>
    </div>
  );
}

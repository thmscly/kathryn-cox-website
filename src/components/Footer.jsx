import React from "react";

function Footer() {
  return (
    <div className="pl-5 pb-1">
      <p>
        ©{new Date().getFullYear()} Katie DeVault. All rights reserved. Website
        by{" "}
        <a
          href="https://tccoxswe.com/"
          rel="noreferrer"
          target="_blank"
          className="underline"
        >
          T.C. Cox
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;

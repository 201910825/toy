import React from "react";


const MobileMenu = ({ stroke = "currentColor" }) => (
  <svg
  strokeWidth="1.5"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{width:'20px'}}
  >
  <path
    d="M3 5H11"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3 12H16"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3 19H21"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  </svg>
);

export default MobileMenu;

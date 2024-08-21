import React from "react";

import "./MainHeader.css";

export default function MainHeader(porps) {
  return <header className="main-header">{porps.children}</header>;
}

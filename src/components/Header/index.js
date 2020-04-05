import React from "react";

import TopInfo from "../TopInfo";
import Logo from "../../images/logo-instagram.png";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <header>
        <Link to="/">
        <img src={Logo} alt="Logo Instagram" />
        </Link>
        <TopInfo />
      </header>
    </div>
  );
}

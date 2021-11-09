import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <section className="header">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;

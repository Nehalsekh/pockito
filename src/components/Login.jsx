import React from "react";
import gmail from "../file/gmail.png";
import billGate from "../file/bill_gates.jpg";
import elonMusk from "../file/elon_musk.jpg";
import markZuker from "../file/mark_zuckerberg.jpg";
import product from "../product/product.jpg";

export default function Login() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={gmail} alt="Gmail Logo" className="logo" />
        </div>
        <div className="divider"></div>
        <div className="icons">
          <img src={billGate} alt="Bill Gates" className="logo" />
        </div>
        <ul className="nav-links">
          <li>About Us</li>
          <li>Services</li>
          <li>Industries</li>
          <li>Publications</li>
          <li>Investors</li>
          <li>Career </li>
        </ul>
      </nav>
      <div className="product">
        <img src={product} alt="product" />
        <div className="content">
          <h3>Innovating with Excellence</h3>
          <p>
            We are amongst the few IT solutions companies, who have delivered
            first of its kind projects for government as well as for the private
            sector. We also specialise in providing GovTech solutions and
            digital transformation services. We provide technology solutions
            across sectors such as mining and allied services, government &
            public services, agriculture and allied services, industry and trade
            facilitation, education, healthcare and tourism.
          </p>
        </div>
        <div className="content">
          <h3>Innovating with Excellence Skkk</h3>
          <p>
            We are amongst the few IT solutions companies, who have delivered
            first of its kind projects for government as well as for the private
            sector. We also specialise in providing GovTech solutions and
            digital transformation services. We provide technology solutions
            across sectors such as mining and allied services, government &
            public services, agriculture and allied services, industry and trade
            facilitation, education, healthcare and tourism.
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router";
import { useCart } from "react-use-cart";

function Navbar() {
    const{totalItems}=useCart();

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>               
              <li className="nav-item">
                <Link className="nav-link" to="features">
                  Features
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shoping
                </Link>
              </li> 
                   <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i class="fa-solid fa-cart-plus"></i> ({totalItems})
                </Link>
              </li> 


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

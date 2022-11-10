import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  fw-bold  " id="head">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src="assets/logo.png" alt=" " width={50} />

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Features
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
                LitePaper 
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link  text-white" href="#">
                Loadmap
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
                FAQs 
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
                Audit Report
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link  text-white">plateFrom</a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
}

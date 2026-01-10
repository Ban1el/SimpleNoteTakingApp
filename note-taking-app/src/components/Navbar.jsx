import { useState } from "react";
import { useNavigate } from "react-router-dom";

function navbar() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <div className="me-3">
              <button className="nav-link active" onClick={Logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;

import React from "react";
import {Link, useLocation} from 'react-router-dom'


const Header = () => {

    const location = useLocation();


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-5 py-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <h1>LOGO</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link "} aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/page1" className={location.pathname === "/page1" ? "nav-link active" : "nav-link "} >Link</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Header
import React from "react";
import PropTypes from "prop-types";

//in my header added all the html jsx and in my main html file i have actually included css and js for this

function Header(props) {
  return (
    

    <header className="p-3 text-bg-dark">
      
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            {/* Optional: SVG logo */}
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">{props.title}</a></li>
  
            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul>
{/* 
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
          </form>
          { */}
          {/* props.login ?
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
          </div>: ""
          } */}

        </div>
      </div>
    </header>
  );
}

Header.defaultProps={
  title:"To-Do-List",
  login:false
}

Header.propTypes={
title:PropTypes.string,
login: PropTypes.bool.isRequired

}
export default Header;

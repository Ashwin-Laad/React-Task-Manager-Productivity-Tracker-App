import React from "react";

function Footer() {

  let s={
    position:"absolute",
    top:"100vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto" style={s}>
      <div className="container">
        <p className="mb-0">© 2025 To-Do App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

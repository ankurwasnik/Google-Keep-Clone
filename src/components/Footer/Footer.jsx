import React from "react";
import './Footer.css' ;

var _year = new Date().getFullYear();

function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer" >Copyright {_year} </h1>
        </footer>
        
    )
}

export default Footer;
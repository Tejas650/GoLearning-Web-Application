import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return(
        <>
            <footer className="w-100 bg-light text-center">
                <p className="copyright">  Copyright ©️ Grow Your Business | Terms and Condition {year} </p>
            </footer>
        </>
    );
};

export default Footer;
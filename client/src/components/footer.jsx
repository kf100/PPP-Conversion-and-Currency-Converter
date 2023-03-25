import React from 'react';
import "./css/footer.css"

const Footer = () => {
    const currentyear=new Date().getFullYear();
    return (
        <footer className='contain'>
            Copyright © {currentyear}
            <p>Made by <span className='text_color'>Kalpesh Fadtare</span></p>
        </footer>
    );
}

export default Footer;

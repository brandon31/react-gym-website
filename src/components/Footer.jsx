import React from 'react';
import '../App.css';

const textStyle = {
    fontSize: '.8rem',
    marginLeft: '.5rem',
    cursor: 'pointer'
}

const styleOne = {
    fontSize: '1.2rem',
    color: '#fff'
}

const h1Style = {
    color: '#fff',
    fontSize: '1.5rem'
}

function Footer() {
    const products = ['Demo', 'Pricing', 'Roadmap', 'FAQ', 'Features']

    const resources = ['Installation Manual', 'Release Notes', 'Community Help', 'Test', 'Test']

    const company = ['About Us', 'Careers', 'Press', 'Support', 'Test']

    return (
        <div className="wrapper">
            <div className='footer-container'>
            <div className="col one">
                <h1 style={h1Style}>Products</h1>
                {products.map(product => <p style={textStyle} >{product}</p>)}

            </div>
            <div className="col two">
            <h1 style={h1Style}>Resources</h1>
                {resources.map(resource => <p style={textStyle}>{resource}</p>)}
            </div>
            <div className="col three">
                <h1 style={h1Style}>Company</h1>
                {company.map(comp => <p style={textStyle}>{comp}</p>)}
            </div>
            <div className="col four">
                <h1 style={h1Style}>Connect with us</h1>
                <p style={styleOne}>Stay up to date with us</p>
                <p>Subscribe to our newslater today to recieve updates on the <br /> latest news, release and special offers. We respect your privacy. <br/> Your information is safe and wl never be shared.</p>
                <div className="form">
                    <input type="email" name="email" id="mail" placeholder='Email ID' />
                    <button className="subscribe">Subscribe</button>
                </div>
            </div>
            </div>
            <p id='footer-text'>
                ©️ 2022 <span>bbfitness</span> Inc. All rights reserved | Terms of service | Privacy | Credits
            </p>
        </div>
    )
}

export default Footer;

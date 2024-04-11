import React from "react";
import { Link } from "react-router-dom"

import { IconContext } from "react-icons";
import { FaInstagram, FaPinterest, FaFacebook } from 'react-icons/fa6'
import { TfiYoutube } from "react-icons/tfi"
import { SiTrustpilot } from "react-icons/si";

import primaryLogo from '../images/NFHPrimaryLogoWhite.png'
import verticalLogo from '../images/NFHVerticalLogoWhite.png'

export default function SiteFooter() {

    return (
        <footer className="footer">
            <div className="footer-body">
                <div className="footer-left">
                    <h4>Get in Touch</h4>
                    <div className="foot-info-box">
                        <p className='info-item'>Tessa Bowers</p>
                        <p className='info-item'>Purcellville, VA 20132 USA</p>
                        <p className='info-item'>Phone: (703) 728-3336</p>
                        <a className='info-item' href="mailto:nourishingfunctionalhealth@gmail.com">
                            nourishingfunctionalhealth@gmail.com
                        </a>
                        <p className='info-item'>Contact Me</p>
                        <br/>
                        <h4>Copyright Tessa Bowers</h4>
                    </div>
                    
                </div>
                <div className="footer-body-divider"></div>
                <div className="footer-right">
                    {/* <img className="footer-logo-img" src={primaryLogo}/> */}
                    <Link to="https://www.trustpilot.com/review/nourishingfunctionalhealth.com?utm_medium=trustbox&utm_source=MicroReviewCount" 
                        target="_blank"
                        className="trustpilot-link"
                        >See our reviews on <SiTrustpilot className="trustpilot-logo" />Trustpilot</Link>
                        <img className="footer-logo-img" src={primaryLogo}/>
                </div>
            </div>
            <div>
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                            <Link to="https://www.instagram.com/nourishingfunctionalhealth/">
                                <FaInstagram title="Instagram" />
                            </Link>
                            <Link to="https://www.facebook.com/nourishingfunctionalhealth">
                                <FaFacebook title="Facebook" />
                            </Link>
                            <Link to="https://www.pinterest.com/nourishingfunctionalhealth/">
                                <FaPinterest title="Pinterest" />
                            </Link>
                            <Link to="https://www.youtube.com/channel/UCF3LWneROLmze85rifD0lWQ">
                                <TfiYoutube title="Youtube" />
                            </Link>
                        </IconContext.Provider>
                    </div>
        </footer>
    )
}
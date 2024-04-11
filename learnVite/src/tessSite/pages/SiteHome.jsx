import React from "react";
import { FaAngleRight, FaGift } from "react-icons/fa6";

export default function SiteHome() {

    return (
        <main className="landing-content">
            <div className="body-text">
                <h2>Struggling with brain fog, fatigue, and other unexplained symptoms?</h2>
                <h2>Do you feel unheard by your doctors and current medical team?</h2>
                <h2>Tired of doing all the right things with no improvement?</h2>
                <br />
                <h1>It's time to take a new approach to your health!</h1>
                <div className="plum-btn">SCHEDULE YOUR FREE HEALTH ASSESSMENT TODAY! <FaAngleRight className="carrot-icon" /></div>
            </div>

            {/* <div className="site-width-img"> */}
                <img className="site-img" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/613ab37eca1d5.png" />
            {/* </div> */}
            
            <div className="body-text">
                <h1>NOURISHING FUNCTIONAL HEALTH</h1>
                <h2>An Online Functional Nutrition Practice specializing in Lyme Disease, co-infections, mold illness, and other inflammatory-inducing toxins and pathogens.</h2>
                <h1>Supporting you and your health journey through a 0% overwhelming individualized approach. </h1>
                <br />
                <h1>Say goodbye to exhaustion and hello to health and happiness!</h1>
                <h2>FEELING GOOD ABOUT YOURSELF AND BEING HEALTHY SIMULTANEOUSLY DOESN'T HAVE TO BE COMPLICATED.</h2>
            </div>

            <div className="body-section-arctic home-about-section">
                <div className="home-tile-box">
                    <div className="home-about-tile">
                        <a href="">
                            <img alt="portrait of Tessa" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/658f978cd03f7.jpg" />
                        </a>
                        <a className="alt-btn" href="/tessa-site/about-tessa">Meet Tessa <FaAngleRight className="carrot-icon"/></a>
                    </div>
                    <div className="home-about-tile">
                        <a href="">
                            <img alt="Grateful customer testemonial" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/6133d05d3000a.png" />
                        </a>
                        <a className="alt-btn" href="">Success Stories <FaAngleRight className="carrot-icon"/></a>
                    </div>
                </div>
            </div>

            <div className="body-free-resource-tiles">
                <h1><FaGift className="gift-icon"/> Free Resources</h1>
                <div className="home-tile-box">
                    <div className="free-resource-tile">
                        <a href="">
                            <img alt="A guide to liver support" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/612ffe8926254.jpg"/>
                        </a>
                        <a className="plum-btn" href="">Learn More <FaAngleRight className="carrot-icon"/></a>
                    </div>
                    <div className="free-resource-tile">
                        <a href="">
                            <img alt="5 steps to balancing your health" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/612ffea0205a1.jpg"/>
                        </a>
                        <a className="plum-btn" href="">Learn More <FaAngleRight className="carrot-icon"/></a>
                    </div>
                    <div className="free-resource-tile">
                        <a href="">
                            <img alt="7 reasons to ditch candles" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/612ffede139a3.jpg"/>
                        </a>
                        <a className="plum-btn" href="">Learn More <FaAngleRight className="carrot-icon"/></a>
                    </div>
                    <div className="free-resource-tile">
                        <a href="">
                            <img alt="A guide to nourish the mind" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/612ffebe8b581.jpg"/>
                        </a>
                        <a className="plum-btn" href="">Learn More <FaAngleRight className="carrot-icon"/></a>
                    </div>
                </div>

            </div>

            <div className="body-section-arctic">
                <div className="body-text">
                    <h1>
                        Schedule your free 30 minute Health Strategy Call
                    </h1>
                    <div className="alt-btn">Book An Appointment <FaAngleRight className="carrot-icon"/></div>
                </div>
            </div>
        </main>
    )
}
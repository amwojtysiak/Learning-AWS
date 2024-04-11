import React from "react";
import { FaAngleRight } from "react-icons/fa6";

import treeOvalBlue from '../images/NFHTreeOvalBlue.png'
import treeOvalWhite from '../images/NFHTreeOvalWhite.png'


export default function StartHere() {

    return (
        <main className="about-page">
            <div className="body-section-arctic">
                <div className="about-intro">
                    <h3>
                        Tessa Bowers is the founder and CEO of Nourishing Functional Health. <br/>
                        She is a Certified Functional Nutrition Counselor and Lyme Specialist who helps women who are overwhelmed with their health and find themselves struggling 
                        with brain fog, fatigue, and other unexplained symptoms.
                    </h3>
                    <div className="about-intro-img-box">
                        <img src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/63e06036b0016.png"/>
                        <img src={treeOvalWhite}/>
                    </div>
                </div>

            </div>

            <div className="about-background-container">
                <div className="about-background">
                    <h4 className="about-background-item1">
                        My Background
                    </h4>
                    <p>
                    Tessa spent a lifetime putting a bandaid over her symptoms - food sensitivities, weight gain, digestive distress, varicose veins, blood clots, miscarriages, anxiety; you name it. She thought she was fixing them by seeing doctor after doctor and doing all the diets. In reality, her body was creating more inflammation and increasing her toxic load until they became an even longer laundry list of unexplained symptoms that wouldn’t go away.
                    </p>
                    <p>
                    In October 2020, her toxin bucket overflowed. A sudden and frightening shift occurred, leading to a new problem with a frightening diagnosis. It turns out that years of exposure to the unseen toxins of mold and water-damaged bacteria is not only scary; it is more common than you think, challenging to diagnose, and even more complex to navigate. And to make matters worse, mold exposure re-activated Lyme disease and several other tick infections. 
                    </p>
                    <p>
                    A lifetime of illness does not heal quickly, and while her journey to recovery is ongoing, she has made significant headway in healing.  Through hard work and commitment, she used the program she developed to identify the body's stressors, improve cellular and organ drainage, navigate food sensitivities, heal her gut her body's ability to detox, and shift her mindset. The inflammation and toxic load are decreasing, and with that, the brain fog has diminished, she has more energy to be a better mom, less pain, and her fatigue has resolved. She has also begun to shed some weight, and she doesn't remember the last time she had a panic attack or struggled with daily anxiety. Tessa believes that this health hurdle happened for a reason, and that reason was so that she may help other women navigate their health with support and clarity. 
                    </p>
                    <p>
                    As a mom, your health often gets pushed to the side, when in reality, keeping you healthy is one of our most important jobs. Tessa works with other moms who struggle with exhaustion, brain fog, fatigue, and other unexplained symptoms through bio-resonance and functional health testing to provide personalized support and solutions to overcome and thrive. Being tired and not feeling enough is something Tessa knows all too well.
                    </p>
                    <p>
                    Tessa is committed to looking at your whole story to detect clues and insight into your health. She utilizes multiple health techniques that provide a unique individualized approach to shift your health back into the wellness zone.
                    </p>
                </div>
                <br/>
                <h4>
                    Outside of the Nourishing Functional Health life, I can be found playing with my 11-year-old tween daughter, snuggling with our labrador retriever or cat, gardening, quilting, and soaking in as much family and friend time as possible. 
                </h4>
            </div>

            <img className="site-img" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/613417027571d.png" />
        
            <div className="text-picture-container">
                <div className="about-text-box">
                    <h3>
                        I believe that it is imperative to investigate the many roots of our health. Looking at your environment, foundations, life history, and lifestyle will provide us with many clues. Navigating health doesn't need to be complicated, and returning to our roots is often the best place to start.  My clients learn how to make small changes in their food choices and lifestyle that positively affect their well-being.
                    </h3>
                </div>
                <img className="about-text-image1" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/61342679492c6.png" />
            </div>

            <div className="text-picture-container">
                <div className="about-text-box">
                <img className="about-text-image2" src="https://5ab71e5155e5b144d879-c1624e84cf4666389398608a95f63e1d.ssl.cf1.rackcdn.com/4607/611006f0bc713.png" />
                    <h3>
                        "Since day one I have felt nothing but genuine caring, concern, and love from Tessa. She has an amazing ability to put anyone on a path to healing. She helped me discover an actual diagnosis after a long time of mainstream doctors not listening to me. She listened to my story, dug deep into my health history, and discovered why I've struggled over my thirty years of life." <br/>
                            -Lauren C, PA
                    </h3>
                </div>
            </div>
        </main>
    )
}
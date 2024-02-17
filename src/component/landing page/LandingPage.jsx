// CSS Style
import "./landingPage.css";
// import React
import React from "react";
// import Icons MUI
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// import
import { ReactTyped } from "react-typed";

export default function LandingPage() {
    return (
        <div className="landingPage">
            <div className="container">
                <span className="rectangle"></span>

                <div className="image-info">
                    <div className="image-container">
                        <div className="image">
                            <img src="/images/pic.png" />
                        </div>
                    </div>

                    <div className="info-container">
                        <div className="info">
                            <h1 className="name">
                                <span>Hey there !</span> <br /> I'm, Abdullah Mahmoud
                            </h1>
                            <h2 className="skills">
                                <ReactTyped
                                    className="text-color"
                                    strings={
                                        (["Graphic designer"], ["Animator"], ["Video editor"])
                                    }
                                    typeSpeed={120}
                                    backSpeed={140}
                                    loop
                                ></ReactTyped>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="social">
                    <a href="#" target="_blank">
                        <EmailOutlinedIcon className="icon email" />
                    </a>
                    <a href="#" target="_blank">
                        <InstagramIcon className="icon instagram" />
                    </a>
                    <a href="#" target="_blank">
                        <FacebookOutlinedIcon className="icon facebook" />
                    </a>
                    <a href="#" target="_blank">
                        <WhatsAppIcon className="icon whatsapp" />
                    </a>
                </div>
            </div>
        </div>
    );
}

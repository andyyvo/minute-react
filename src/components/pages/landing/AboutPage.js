import React from "react";
import LandingNavbar from "../../layouts/LandingNavbar";

const AboutPage = () => {
    return (
        <div className="about">
            <div className="landing-header">
                <LandingNavbar />
            </div>
            <div className="about-content">
                <div className="section1">
                    <h1>Building Public Speaking Confidence</h1>
                    <p>Our mission is to <span className="redHighlight">expand</span> the world of feasible public speaking solutions. We provide young adults a platform where they can <span className="redHighlight">enhance</span> their skills to become more comfortable at effectively communicating.</p>
                </div>
                <h1>About</h1>
                <p>
                    This is a sample about page. Andy Vo. Ashley Kim. Elliot Cho. Myka Kuguya. Rebecca Chang. Jack Guinta.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
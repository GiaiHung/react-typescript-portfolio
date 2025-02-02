import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

const About = () => {
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">Know Who <span className="brand-red">I'M</span> </h3>
                    <div>
                        <div>
                            <p> Hi Everyone, I am Giai Hưng from Hochiminh, VietNam.</p>

                            <p> I am currently employed as a Technical Consultant. The software I mostly work with is Maximo (Asset Management System)</p>

                            <p> I have completed Bachelor's degree in Business Administration at Ton Duc Thang University but fell in love with programming later, so I decided it to be my career pursuit.</p>
                        </div>
                    </div>
                    <div>
                        <p>Apart from coding, some other activities that I love to do!

                        </p>
                        <ul>
                            <li>Playing musical instruments</li>
                            <li>Exercise</li>
                            <li>Travelling</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">"The pathway appears when the aim is firmly in mind"</p>
                        <p className="text-center brand-red">--Jordan B. Peterson</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">Education</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2020-2024</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">International Business</p>
                                                <p className="company">Ton Duc Thang University</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        gmail={APP_DATA.GMAIL_URL}
                        linkedin={APP_DATA.LINKEDIN_URL}
                        zalo={APP_DATA.ZALO_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;
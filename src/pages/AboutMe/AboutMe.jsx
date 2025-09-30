import AboutMeStyles from "./AboutMe.module.css"
import VheeJhay from "../../assets/Vhee.jpg"
import { FaMapPin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaChessRook } from "react-icons/fa";
import { SiCircleci } from "react-icons/si";
import useMediaQuery from "../../hooks/useMediaQuery";

function AboutMe() {
    const isMobile = useMediaQuery(600);

    return (
        <>
            <div className={AboutMeStyles.section}>
                <div className={AboutMeStyles.section_context}
                data-aos="fade-down-right"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000">
                    <h1 className={AboutMeStyles.section_header}>ABOUT&nbsp;<span>ME</span></h1>
                    <div style={{ margin: "0 .25rem"}}>
                        <p>Hello, I'm Vincent James Beato. A fresh graduate in Computer Science. An Aspiring Full Stack Developer with a passion for creating innovative and user-friendly web applications. Eager to learn, enhance, and adapt to new technologies, and contribute to the success of
                        a project.</p>

                        <br />

                        <p><FaMapPin style={{color: "#bb86fc"}} /> Based in Itogon, Benguet and Baguio City, Philippines</p>

                        <br />

                        <p><FaChessRook style={{color: "#bb86fc"}} /> &nbsp;Full Stack Developer | Backend Developer | Frontend Developer</p>

                        <br />

                        <div className={AboutMeStyles.contact_info}>
                            <p><FaPhoneAlt style={{color: "#bb86fc"}} /> &nbsp;+63 928 071 5822</p>
                            <p><MdEmail style={{color: "#bb86fc"}} /> &nbsp;vheebhee7@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className={AboutMeStyles.img_container}
                data-aos="fade-down-left"
                data-aos-anchor-placement="top-center"
                data-aos-duration="2500">
                    <img src={VheeJhay} alt="VheeJhay" className={AboutMeStyles.about_img}/>
                </div>
            </div>

            <div>
                <div className={AboutMeStyles.sub_section_container}>
                    <h4 className={AboutMeStyles.sub_section_header}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500"
                    >WORK&nbsp;<span>EXPERIENCE</span></h4>
                    <div className={AboutMeStyles.timeline}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500"
                    data-aos-delay="100">
                        <div className={AboutMeStyles.timeline_item}>
                            <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                            <div className={AboutMeStyles.timeline_info}>
                                <h3>BAGUIO CITY'S SMART CITY COMMAND AND CONTROL CENTER</h3>
                                <p className={AboutMeStyles.timeline_info_role}>Full Stack Developer Intern</p>
                                <div className={AboutMeStyles.timeline_sub_info}>
                                    <h4>Baguio City</h4>
                                    <h4>FEBRUARY 2025 - MAY 2025</h4>
                                </div>
                                <p>Created a web system that is used to create reports related to incidents and emergency response, to aid with recording and tracking of cases. Designed the web system’s user interface using Figma to help guide with the development process. Used Vue 3 for the frontend, implemented composition api with script setup for syntax. Used Laravel 11 for the backend, implemented RESTful API to allow the communication with the frontend. Implemented Axios to handle HTTP requests between the backend and frontend of the web system, Pinia for the web system’s state management, and Github for version control.</p>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className={AboutMeStyles.sub_section_container}>
                    <h4 className={AboutMeStyles.sub_section_header}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500">EDUCATIONAL&nbsp;<span>BACKGROUND</span></h4>
                    <div className={AboutMeStyles.timeline}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500"
                    data-aos-delay="100">
                        <div className={AboutMeStyles.timeline_item}>
                            <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                            <div className={AboutMeStyles.timeline_info}>
                                <h3>Bachelor of Science in Computer Science</h3>
                                <div className={AboutMeStyles.timeline_sub_info}>
                                    <h4>University of Baguio</h4>
                                    <h4>2021 - 2025</h4>
                                </div>
                                <p>A fresh graduate in Computer Science. Learn various skills and knowledge necessary and related to Software Development. </p>
                            </div>
                        </div>
                    </div>
                    <div className={AboutMeStyles.timeline}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500"
                    data-aos-delay="100">
                        <div className={AboutMeStyles.timeline_item}>
                            <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                            <div className={AboutMeStyles.timeline_info}>
                                <h3>Senior High School | Information and Communication Technology (ICT)                                </h3>
                                <div className={AboutMeStyles.timeline_sub_info}>
                                    <h4>University of Baguio</h4>
                                    <h4>2019 – 2021</h4>
                                </div>
                                <p>Graduated in Information and Communication Technology (ICT) specialization in Computer System Servicing (CSS).</p>
                            </div>
                        </div>
                    </div>
                    <div className={AboutMeStyles.timeline}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500"
                    data-aos-delay="100">
                        <div className={AboutMeStyles.timeline_item}>
                            <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                            <div className={AboutMeStyles.timeline_info}>
                                <h3>Junior High School</h3>
                                <div className={AboutMeStyles.timeline_sub_info}>
                                    <h4>Computer Arts Technological College</h4>
                                    <h4>2016 – 2019</h4>
                                </div>
                                {/* <p>Graduated in Information and Communication Technology (ICT) specialization in Computer System Servicing (CSS).</p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={AboutMeStyles.sub_section_container}>
                    <h4 className={AboutMeStyles.sub_section_header}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500">WHAT I&nbsp;<span>OFFER</span></h4>
                    {isMobile ? (
                        <div className={AboutMeStyles.offer_container}>
                            <div className={AboutMeStyles.offer_item}
                            data-aos="fade-up-right"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1500"
                            data-aos-delay="100">
                                <h3>Full Stack Web Application Development</h3>
                                <p>I can build complete full stack web applications by designing the backend with Laravel and MySQL, and creating responsive, interactive frontends using Vue.js and TailwindCSS.</p>
                            </div>
                            <div className={AboutMeStyles.offer_item}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1500"
                            data-aos-delay="200">
                                <h3>Web & Mobile Application Development</h3>
                                <p>I have experience in building both web and mobile applications using modern technologies such as React Native, Vue.js, Laravel, and Expo Go.</p>
                            </div>
                            <div className={AboutMeStyles.offer_item}
                            data-aos="fade-up-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1500"
                            data-aos-delay="300">
                                <h3>Responsive Design</h3>
                                <p>I have experience in creating responsive designs that work across different devices and screen sizes. I can create a website that is optimized for mobile devices and can be accessed from any device.</p>
                            </div>
                        </div>
                        ) : (
                            <div className={AboutMeStyles.offer_container}>
                            <div className={AboutMeStyles.offer_item}
                            data-aos="fade-up-right"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1500"
                            data-aos-delay="100">
                                <h3>Full Stack Development</h3>
                                <p>I can build complete full stack web applications by designing the backend with Laravel and MySQL, and creating responsive, interactive frontends using Vue.js and TailwindCSS.</p>
                            </div>
                            <div className={AboutMeStyles.offer_item}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1500"
                            data-aos-delay="100">
                                <h3>Web & Mobile Application Development</h3>
                                <p>I have experience in building both web and mobile applications using modern technologies such as React Native, Vue.js, Laravel, and Expo Go.</p>
                            </div>
                            <div className={AboutMeStyles.offer_item}
                            data-aos="fade-up-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1500"
                            data-aos-delay="100">
                                <h3>Responsive Design</h3>
                                <p>I have experience in creating responsive designs that work across can different devices and screen sizes. I can create a website that is optimized for mobile devices and can be accessed from any device.</p>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default AboutMe;
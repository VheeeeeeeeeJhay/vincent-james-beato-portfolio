import React, { useState, useEffect } from 'react';
import HomeStyles from "./Home.module.css";
import VheeJhay from "../../assets/Vhee.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import onlinejobs from "../../assets/onlinejobs.jpeg";
import resume from "../../assets/Vincent_James_Beato_CV.pdf";
import useMediaQuery from "../../hooks/useMediaQuery";

function Home({ id }) {
    const isMobile = useMediaQuery(600);
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id={id} className={HomeStyles.home}>
            <div className={HomeStyles.home_container}>
                {isMobile ? (
                    <div 
                        className={HomeStyles.hero_container}
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        {/* Mobile content here */}
                        <img
                            src={VheeJhay}
                            alt="Portrait of Vincent James Beato"
                            className={HomeStyles.hero_img}
                        />

                        <div className={HomeStyles.hero_text}>
                            <h1 className={HomeStyles.hero_name}>Vincent James Beato</h1>
                            <p className={HomeStyles.hero_role}>Computer Science Graduate | Developer</p>

                            <div className={HomeStyles.hero_links}>
                                <div className={HomeStyles.link}>
                                    <a
                                        href="https://github.com/VheeeeeeeeeJhay"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                    >
                                        <FaGithubSquare />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/vincent-james-beato-8a2818351"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="mailto:vheebhee7@gmail.com"
                                        aria-label="Send Email"
                                    >
                                        <MdEmail />
                                    </a>
                                    <a href="https://www.onlinejobs.ph/jobseekers/info/4308174" target="_blank" rel="noopener noreferrer" aria-label="Online Jobs">
                                        <img src={onlinejobs} alt="Online Jobs" />
                                    </a>
                                </div>
                                

                                <span className={HomeStyles.divider}></span>

                                <div className={HomeStyles.link}>
                                    <a className={HomeStyles.hero_button} onClick={scrollToProjects}>View Projects</a>
                                    <a className={HomeStyles.hero_button} href={resume} download>Download Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div 
                        className={HomeStyles.hero_container}
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        {/* Desktop content here */}
                        <img
                            src={VheeJhay}
                            alt="Portrait of Vincent James Beato"
                            className={HomeStyles.hero_img}
                        />

                        <div className={HomeStyles.hero_text}>
                            <h1 className={HomeStyles.hero_name}>Vincent James Beato</h1>
                            <p className={HomeStyles.hero_role}>Computer Science Graduate | Developer</p>

                            <div className={HomeStyles.hero_links}>
                                <div className={HomeStyles.link}>
                                    <a
                                        href="https://github.com/VheeeeeeeeeJhay"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                    >
                                        <FaGithubSquare />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/vincent-james-beato-8a2818351"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="mailto:vheebhee7@gmail.com"
                                        aria-label="Send Email"
                                    >
                                        <MdEmail />
                                    </a>
                                    <a href="https://www.onlinejobs.ph/jobseekers/info/4308174" target="_blank" rel="noopener noreferrer" aria-label="Online Jobs">
                                        <img src={onlinejobs} alt="Online Jobs" />
                                    </a>
                                </div>
                                

                                <span className={HomeStyles.divider}></span>

                                <div className={HomeStyles.link}>
                                    <a className={HomeStyles.hero_button} onClick={scrollToProjects}>View Projects</a>
                                    <a className={HomeStyles.hero_button} href={resume} download>Download Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Home;

import React, { useState, useEffect, useRef } from 'react';
import NavbarStyles from "./Navbar.module.css"
import Home from "../../pages/Home/Home"
import AboutMe from "../../pages/AboutMe/AboutMe"
import RelevantProjects from "../../pages/Project/RelevantProjects"
import Contact from "../../pages/Contact/Contact"
import VheeJhay from "../../assets/Vhee.jpg";

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const projectsSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];
    return (
        <>
            <nav className={`${NavbarStyles.nav} ${activeSection === 'home' ? NavbarStyles.nav_home : ''}`}>
                <div className={NavbarStyles.nav_img_container}>
                    <img
                        src={VheeJhay}
                        alt="Portrait of Vincent James Beato"
                        className={NavbarStyles.nav_img}
                    />
                    <div>
                        <h1 className={NavbarStyles.nav_h1}>VINCENT JAMES BEATO</h1>
                        <p className={NavbarStyles.status}>Available for Work</p>
                    </div>
                </div>
                {activeSection !== 'home' && (
                    <ul className={NavbarStyles.nav_links}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`}
                                    className={activeSection === link.id ? NavbarStyles.active : ''}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            <main style={{margin: "0 10%"}}>
                <section id="home">
                    <Home />
                </section>

                <section id="about">
                    <AboutMe />
                </section>  
                
                <section id="projects" ref={projectsSectionRef}>
                    <RelevantProjects />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>
        </>
    )
}

export default Navbar

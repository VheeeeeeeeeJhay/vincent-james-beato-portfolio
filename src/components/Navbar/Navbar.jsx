import React, { useState, useEffect, useRef, useCallback } from 'react';
import NavbarStyles from "./Navbar.module.css"
import Home from "../../pages/Home/Home"
import AboutMe from "../../pages/AboutMe/AboutMe"
import RelevantProjects from "../../pages/Project/RelevantProjects"
import Contact from "../../pages/Contact/Contact"
import VheeJhay from "../../assets/Vhee.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    const projectsSectionRef = useRef(null);

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setShowMenu(false);
        }
    }, []);

    // Handle window resize to update mobile state
    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.innerWidth <= 768;
            setIsMobile(isMobileView);
            // Close menu when switching to desktop view
            if (!isMobileView) {
                setShowMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        // Call once to set initial state
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;
            let isHomeSection = false;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        // Close menu if we're in the home section and menu is open
                        if (section === 'home' && showMenu) {
                            setShowMenu(false);
                        }
                        isHomeSection = section === 'home';
                        break;
                    }
                }
            }

            // If we're at the very top of the page (home section), close the menu
            if (window.scrollY < 100 && showMenu) {
                setShowMenu(false);
                setActiveSection('home');
            }
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && 
                !event.target.closest(`.${NavbarStyles.menu_button}`)) {
                setShowMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [scrollToSection]);

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
                {isMobile && activeSection !== 'home' && (
                    <button 
                        className={`${NavbarStyles.menu_button} ${showMenu ? NavbarStyles.menu_open : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowMenu(!showMenu);
                        }}
                        aria-label="Toggle menu"
                    >
                        {showMenu ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
                    </button>
                )}
                {isMobile && (
                    <div className={`${NavbarStyles.mobile_menu} ${showMenu ? NavbarStyles.mobile_menu_open : ''}`} ref={menuRef}>
                        <ul className={NavbarStyles.mobile_nav_links}>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className={activeSection === link.id ? NavbarStyles.active : ''}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.id);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className={NavbarStyles.mobile_menu_contacts}>
                            <h5>Contact Me</h5>
                            <p>vheebhee7@gmail.com</p>
                            <p>+63 928 071 5822</p>
                            <p>Itogon Benuet | Baguio City, Philippines</p>
                        </div>
                    </div>
                )}
            </nav>

            <main className={NavbarStyles.main}>
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

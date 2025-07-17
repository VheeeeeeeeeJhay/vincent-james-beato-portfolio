import AboutMeStyles from "./AboutMe.module.css"
import VheeJhay from "../../assets/Vhee.jpg"
import { FaMapPin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaChessRook } from "react-icons/fa";
import { SiCircleci } from "react-icons/si";

function AboutMe() {
    const techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

    return (
        <>
            <div className={AboutMeStyles.section}>
                <div className={AboutMeStyles.section_context}>
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
                            <p><FaPhoneAlt style={{color: "#bb86fc"}} /> &nbsp;+63 917 555 5555</p>
                            <p><MdEmail style={{color: "#bb86fc"}} /> &nbsp;vheebhee7@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className={AboutMeStyles.img_container}>
                    <img src={VheeJhay} alt="VheeJhay" className={AboutMeStyles.about_img}/>
                </div>
            </div>

            <div className={AboutMeStyles.sub_section_container}>
                <h4 className={AboutMeStyles.sub_section_header}>WORK&nbsp;<span>EXPERIENCE</span></h4>
                <div className={AboutMeStyles.timeline}>
                    <div className={AboutMeStyles.timeline_item}>
                        <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                            <div className={AboutMeStyles.timeline_info}>
                            <h3>BAGUIO CITY'S SMART CITY COMMAND AND CONTROL CENTER</h3>
                            <div className={AboutMeStyles.timeline_sub_info}>
                                <h4>Baguio City</h4>
                                <h4>FEBRUARY 2025 - MAY 2025</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, harum temporibus exercitationem repellendus, enim nulla eos molestiae possimus, vero reiciendis dignissimos tenetur expedita culpa! Modi dignissimos qui laboriosam impedit aut!</p>
                        </div>
                    </div>
                </div>


                <h4 className={AboutMeStyles.sub_section_header}>EDUCATIONAL&nbsp;<span>BACKGROUND</span></h4>
                <div className={AboutMeStyles.timeline}>
                    <div className={AboutMeStyles.timeline_item}>
                        <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                        <div className={AboutMeStyles.timeline_info}>
                            <h3>Bachelor of Science in Computer Science</h3>
                            <div className={AboutMeStyles.timeline_sub_info}>
                                <h4>University of Baguio</h4>
                                <h4>2021 - 2025</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, harum temporibus exercitationem repellendus, enim nulla eos molestiae possimus, vero reiciendis dignissimos tenetur expedita culpa! Modi dignissimos qui laboriosam impedit aut!</p>
                        </div>
                    </div>
                </div>
                <div className={AboutMeStyles.timeline}>
                    <div className={AboutMeStyles.timeline_item}>
                        <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                        <div className={AboutMeStyles.timeline_info}>
                            <h3>Senior High School</h3>
                            <div className={AboutMeStyles.timeline_sub_info}>
                                <h4>University of Baguio</h4>
                                <h4>2021 - 2025</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, harum temporibus exercitationem repellendus, enim nulla eos molestiae possimus, vero reiciendis dignissimos tenetur expedita culpa! Modi dignissimos qui laboriosam impedit aut!</p>
                        </div>
                    </div>
                </div>
                <div className={AboutMeStyles.timeline}>
                    <div className={AboutMeStyles.timeline_item}>
                        <SiCircleci className={AboutMeStyles.timeline_icon} style={{color: "#bb86fc"}} />
                        <div className={AboutMeStyles.timeline_info}>
                            <h3>Junior High School</h3>
                            <div className={AboutMeStyles.timeline_sub_info}>
                                <h4>University of Baguio</h4>
                                <h4>2021 - 2025</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, harum temporibus exercitationem repellendus, enim nulla eos molestiae possimus, vero reiciendis dignissimos tenetur expedita culpa! Modi dignissimos qui laboriosam impedit aut!</p>
                        </div>
                    </div>
                </div>


                <h4 className={AboutMeStyles.sub_section_header}>WHAT I&nbsp;<span>OFFER</span></h4>
                <div className={AboutMeStyles.offer_container}>
                    <div className={AboutMeStyles.offer_item}>
                        <h3>Full Stack Development</h3>
                        <p>With a strong foundation in computer science and a passion for web development, I am eager to contribute to the success of your projects. I am committed to learning and adapting to new technologies, and I am excited to bring my skills to your team.</p>
                    </div>
                    <div className={AboutMeStyles.offer_item}>
                        <h3>Backend Development</h3>
                        <p>With a strong foundation in computer science and a passion for web development, I am eager to contribute to the success of your projects. I am committed to learning and adapting to new technologies, and I am excited to bring my skills to your team.</p>
                    </div>
                    <div className={AboutMeStyles.offer_item}>
                        <h3>Responsive Design</h3>
                        <p>With a strong foundation in computer science and a passion for web development, I am eager to contribute to the success of your projects. I am committed to learning and adapting to new technologies, and I am excited to bring my skills to your team.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;
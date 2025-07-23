import ContactStyles from "./Contact.module.css";
import Vhee from "../../assets/about_me.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import onlinejobs from "../../assets/onlinejobs.jpeg";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <section className={ContactStyles.section}>
            <h1
                className={ContactStyles.section_header}
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                Contact <span>Me</span>
            </h1>

            <div
                className={ContactStyles.container_1}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
            >
                <p>Feel free to reach out. I’d love to connect with you, hear your ideas, or simply have a quick chat.</p>
            </div>

            {/* === Image Section === */}
            <div
                className={ContactStyles.img_wrapper}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
                <img src={Vhee} alt="Vhee" className={ContactStyles.contact_img} />
                <div className={ContactStyles.box}>
                    <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_1}`}></div>
                    <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_2}`}></div>
                    <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_3}`}></div>
                    <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_4}`}></div>
                </div>
            </div>

            {/* === Contact Icons === */}
            <div className={ContactStyles.icon_grid}>
                <div className={ContactStyles.contact_item}>
                    <div className={ContactStyles.icon_circle}><MdEmail /></div>
                    <p>Email</p>
                    <a href="mailto:vheebhee7@gmail.com">vheebhee7@gmail.com</a>
                </div>
                <div className={ContactStyles.contact_item}>
                    <div className={ContactStyles.icon_circle}><FaPhoneAlt /></div>
                    <p>Phone</p>
                    <a href="tel:+639280715822">+63 928 071 5822</a>
                </div>
                <a href="https://linkedin.com/in/vincent-james-beato-8a2818351" target="_blank" rel="noopener noreferrer" className={ContactStyles.contact_link}>
                    <div className={ContactStyles.contact_item}>
                        <div className={ContactStyles.icon_circle}><FaLinkedin /></div>
                        <p>LinkedIn</p>
                    </div>
                </a>
                <a href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer" className={ContactStyles.contact_link}>
                    <div className={ContactStyles.contact_item}>
                        <div className={ContactStyles.icon_circle}><FaGithub /></div>
                        <p>GitHub</p>
                    </div>
                </a>
                <a href="https://onlinejobs.ph/jobseekers/info/4308174" target="_blank" rel="noopener noreferrer" className={ContactStyles.contact_link}>
                    <div className={ContactStyles.contact_item}>
                        <div className={ContactStyles.icon_circle}><img src={onlinejobs} alt="OnlineJobs" /></div>
                        <p>OnlineJobs</p>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Contact;

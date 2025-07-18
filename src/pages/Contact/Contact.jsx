import ContactStyles from "./Contact.module.css"
import Vhee from "../../assets/about_me.jpg"
import useMediaQuery from "../../hooks/useMediaQuery"

function Contact() {
    const isMobile = useMediaQuery(600)

    return (
        <>
            <div className={ContactStyles.section}>
                <h1 className={ContactStyles.section_header}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000">Contact&nbsp;<span>Me</span></h1>

                <div className={ContactStyles.container_1}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1500"
                data-aos-delay="100">
                    <p>Send me a message and I'll get back to you as soon as possible. I'm looking forward to hearing from you!</p>
                </div>

                {isMobile ? (
                    <div className={ContactStyles.container_2}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                    >
                    <div className={ContactStyles.img_container}>
                        <img src={Vhee} alt="Vhee" className={ContactStyles.contact_img} />
                        <div className={ContactStyles.box}>
                            <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_1}`}></div>
                            <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_2}`}></div>
                            <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_3}`}></div>
                            <div className={`${ContactStyles.img_corner} ${ContactStyles.img_corner_border_4}`}></div>
                        </div>
                    </div>

                    <div className={ContactStyles.contact_form}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                    >
                       <div className={ContactStyles.form}>
                            <div className={ContactStyles.h3_divider_2}>
                                <h3>Send Me A <span className={ContactStyles.span_2}>Message</span></h3>
                                <span className={ContactStyles.divider_2}></span>
                            </div>
                            <form action="">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <textarea placeholder="Message"></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div> 
                    </div>
                </div>
                ) : (
                    <div className={ContactStyles.container_2}
                    >
                        <div className={ContactStyles.img_container}
                        data-aos="fade-down-right"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="1500"
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

                        <div className={ContactStyles.contact_form}
                        data-aos="fade-down-left"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="1500"
                        data-aos-delay="200"
                        >
                            <div className={ContactStyles.form}>
                                <div className={ContactStyles.h3_divider_2}>
                                    <h3>Send Me A <span className={ContactStyles.span_2}>Message</span></h3>
                                    <span className={ContactStyles.divider_2}></span>
                                </div>
                                <form action="">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <textarea placeholder="Message"></textarea>
                                    <button type="submit">Send Message</button>
                                </form>
                            </div> 
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Contact

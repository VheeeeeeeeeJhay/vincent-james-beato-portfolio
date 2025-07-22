import RelevantProjectsStyles from "./RelevantProjects.module.css"
import Barter from "../../assets/barter.jpg"
import Inventory from "../../assets/inventory.jpg"
import TodoList from "../../assets/todo.jpg"
import FoodOrdering from "../../assets/order.jpg"

function RelevantProjects() {
    return (
        <>
            <div className={RelevantProjectsStyles.section}>
                <h1 className={RelevantProjectsStyles.section_header}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000">Relevant&nbsp;<span>Projects</span></h1>
                
                <div className={RelevantProjectsStyles.cards_container}>
                    <div className={RelevantProjectsStyles.card}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="2500"
                    data-aos-delay="100">
                        <img className={RelevantProjectsStyles.card_img} src={Barter} alt="Raiden" />
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>Swapii: Barter Web System</h3>
                            <p>Created a web system used to trade or barter school-related items among the students.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>VueJs</p>
                            <p>InertiaJs</p>
                            <p>Laravel</p>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">Source Code</a>
                            {/* <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">View Project</a> */}
                        </div>
                    </div>
                    <div className={RelevantProjectsStyles.card}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="2500"
                    data-aos-delay="200">
                        <img className={RelevantProjectsStyles.card_img} src={Inventory} alt="Inventory"/>
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>Inventory System for Poultry Business</h3>
                            <p>Created a web system used to monitor incoming and outgoing poultry products and also track inventory of the business.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>Laravel</p>
                            <p>Bootstrap 5</p>
                            <p>Breeze</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">Source Code</a>
                            {/* <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">View Project</a> */}
                        </div>
                    </div>
                    <div className={RelevantProjectsStyles.card}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="2500"
                    data-aos-delay="300">
                        <img className={RelevantProjectsStyles.card_img} src={TodoList} alt="TodoList"/>
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>Todo List Application</h3>
                            <p>Created a to-do list application to track and organize tasks.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>React Native</p>
                            <p>Expo Go</p>
                            <p>Firebase</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">Source Code</a>
                            {/* <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">View Project</a> */}
                        </div>
                    </div>
                    <div className={RelevantProjectsStyles.card}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="2500"
                    data-aos-delay="400">
                        <img className={RelevantProjectsStyles.card_img} src={FoodOrdering} alt="FoodOrdering"/>
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>Food Ordering System</h3>
                            <p>Created a web application that allows users to browse and order Filipino cuisines.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>Laravel</p>
                            <p>Bootstrap 5</p>
                            {/* <p>JavaScript</p> */}
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">Source Code</a>
                            {/* <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">View Project</a> */}
                        </div>
                    </div>
                </div>
    
            </div>
        </>
    )
}

export default RelevantProjects;

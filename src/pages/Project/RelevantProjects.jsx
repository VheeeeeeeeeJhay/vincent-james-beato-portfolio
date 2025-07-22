import RelevantProjectsStyles from "./RelevantProjects.module.css"
import TodoList from "../../assets/todo.jpg"
import FoodOrdering from "../../assets/order.jpg"
import Portfolio from "../../assets/web_portfolio.png"
import Dashboard from "../../assets/Dashboard.png"
import Swapii from "../../assets/Swapii.png"
import Inventory from "../../assets/Inventory.png"
import todo from "../../assets/todo.jpg"

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
                        <img className={RelevantProjectsStyles.card_img} src={Portfolio} alt="Portfolio" />
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>Web Portfolio</h3>
                            <p>Created a web portfolio to showcase my skills and projects. It is a single page application that is easy to navigate and use.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>ReactJs</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Firebase</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay/vincent-james-beato-portfolio.git" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className={RelevantProjectsStyles.card}
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="2500"
                        data-aos-delay="100">
                        <img className={RelevantProjectsStyles.card_img} src={Dashboard} alt="Dashboard" />
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>911 Dashboard</h3>
                            <p>Created an interactive dashboard for emergency services to manage and track emergency calls, reports, and dispatches.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>VueJs</p>
                            <p>Axios</p>
                            <p>Laravel</p>
                            <p>Tailwind CSS</p>
                            <p>REST API</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay/911-Dashboard.git" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className={RelevantProjectsStyles.card}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="2500"
                    data-aos-delay="100">
                        <img className={RelevantProjectsStyles.card_img} src={Swapii} alt="Swapii" />
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>Swapii: Barter Web System</h3>
                            <p>A group thesis project to help students trade or barter school-related items among students. A web system focused on trading or bartering school-related items among students who have unused or needed school-related items.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>VueJs</p>
                            <p>InertiaJs</p>
                            <p>Laravel</p>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/Kronux123/barter.git" target="_blank" rel="noopener noreferrer">Source Code</a>
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
                            <p>A group project created to helped an existing and actual poultry to monitor incoming and outgoing poultry products and also track inventory of the business.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>Laravel</p>
                            <p>Bootstrap 5</p>
                            <p>Breeze</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/RyleFuentes/ISPB.git" target="_blank" rel="noopener noreferrer">Source Code</a>
                            {/* <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">View Project</a> */}
                        </div>
                    </div>
                    <div className={RelevantProjectsStyles.card}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="2500"
                    data-aos-delay="300">
                        <img className={RelevantProjectsStyles.card_img} src={todo} alt="TodoList"/>
                        <div className={RelevantProjectsStyles.card_info}>
                            <h3>Todo List Application</h3>
                            <p>Created a to-do list mobile application to track and organize tasks. It is designed to be simple and easy to use and responsive across different mobile devices viewports.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>React Native</p>
                            <p>Expo Go</p>
                            <p>Firebase</p>
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            <a className={RelevantProjectsStyles.card_button} href="https://github.com/20208094/ToDoListTrial.git" target="_blank" rel="noopener noreferrer">Source Code</a>
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
                            <p>Created a full stack web application that allows users to browse and order Filipino cuisines. It is designed to be simple and easy to use and responsive across different mobile devices viewports.</p>
                        </div>
                        <div className={RelevantProjectsStyles.tags_container}>
                            <p>Laravel</p>
                            <p>Bootstrap 5</p>
                            {/* <p>JavaScript</p> */}
                        </div>
                        <div className={RelevantProjectsStyles.card_buttons}>
                            {/* <a className={RelevantProjectsStyles.card_button} href="" target="_blank" rel="noopener noreferrer">Source Code</a> */}
                            {/* <a className={RelevantProjectsStyles.card_button} href="https://github.com/VheeeeeeeeeJhay" target="_blank" rel="noopener noreferrer">View Project</a> */}
                        </div>
                    </div>
                </div>
    
            </div>
        </>
    )
}

export default RelevantProjects;

import { useState } from "react"
import Modal from "../../components/Modal/Modal"
import RelevantProjectsStyles from "./RelevantProjects.module.css"
import TodoList from "../../assets/todo.jpg"
import FoodOrdering from "../../assets/order.jpg"
import Portfolio from "../../assets/web_portfolio.png"
import Dashboard from "../../assets/Dashboard.png"
import Swapii from "../../assets/Swapii.png"
import Inventory from "../../assets/Inventory.png"
import Redesign from "../../assets/redesign.png"
import PokeSearch from "../../assets/PokeSearch.png"


function RelevantProjects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = {
        'project_1': {
            'img': FoodOrdering,
            'title': "Food Ordering System",
            'title_desc': 'Created a full stack web application that allows users to browse and order Filipino cuisines. It is designed to be simple and easy to use and responsive across different mobile devices viewports.',
            'tech_stack': ['Laravel', 'Bootstrap5'],
            'github': '',
            'project_link': ''
        },
        'project_2': {
            'img': TodoList,
            'title': "Todo List Application",
            'title_desc': 'Created a to-do list mobile application to track and organize tasks. It is designed to be simple and easy to use and responsive across different mobile devices viewports.',
            'tech_stack': ['React Native', 'Expo Go'],
            'github': '',
            'project_link': ''
        },
        'project_3': {
            'img': Inventory,
            'title': "Inventory System for Poultry Business",
            'title_desc': 'A group project created to helped an existing and actual poultry to monitor incoming and outgoing poultry products and also track inventory of the business.',
            'tech_stack': ['Laravel', 'Tailwind CSS', 'Livewire', 'AlphineJs'],
            'github': '',
            'project_link': ''
        },
        'project_4': {
            'img': Swapii,
            'title': "Swapii: Barter Web System",
            'title_desc': 'A group thesis project to help students trade or barter school-related items among students. A web system focused on trading or bartering school-related items among students who have unused or needed school-related items.',
            'tech_stack': ['VueJs', 'InertiaJs', 'Laravel', 'Tailwind CSS'],
            'github': '',
            'project_link': ''
        },
        'project_5': {
            'img': Dashboard,
            'title': "911 Dashboard",
            'title_desc': 'Created an interactive dashboard for emergency services to manage and track emergency calls, reports, and dispatches.',
            'tech_stack': ['Vue', 'Laravel', 'Pinia', 'Axios', 'Tailwind'],
            'github': '',
            'project_link': ''
        },
        'project_6': {
            'img': Portfolio,
            'title': "Web Portfolio",
            'title_desc': 'Created a web portfolio to showcase my skills and projects. It is a single page application that is easy to navigate and use.',
            'tech_stack': ['React', 'CSS'],
            'github': 'https://github.com/VheeeeeeeeeJhay/vincent-james-beato-portfolio',
            'project_link': 'http://localhost:5173/vincent-james-beato-portfolio/#projects'
        },
        'project_7': {
            'img': Redesign,
            'title': "Mockup Landing Page",
            'title_desc': 'Created a mockup redesign of a home page as an assignment. It is a single page application that is easy to navigate and use. Since this is a mockup, no backend was implemented only frontend was used.',
            'tech_stack': ['Vue', 'CSS'],
            'github': 'https://github.com/VheeeeeeeeeJhay/Home-Page-Redesign',
            'project_link': 'https://vheeeeeeeeejhay.github.io/Home-Page-Redesign/'
        },
        'project_8': {
            'img': PokeSearch,
            'title': "PokeSearch",
            'title_desc': `Created a very simple pokemon searching site that uses PokeAPI's restful api to fetch pokemon data.`,
            'tech_stack': ['HTML', 'Tailwind CSS', 'Javascript'],
            'github': 'https://github.com/VheeeeeeeeeJhay/PokeSearch',
            'project_link': 'https://vheeeeeeeeejhay.github.io/PokeSearch/'
        },
    }

    return (
        <>
          <div className={RelevantProjectsStyles.section}>
            <h1
              className={RelevantProjectsStyles.section_header}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="1000"
            >
              Relevant&nbsp;<span>Projects</span>
            </h1>
    
            <div className={RelevantProjectsStyles.cards_container}>
              {Object.entries(projects)
                .reverse()
                .map(([key, project], index) => (
                  <div
                    className={RelevantProjectsStyles.card}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="2500"
                    data-aos-delay={100 * (index + 1)}
                    key={index}
                    onClick={() => setSelectedProject(project)} // open modal on click
                  >
                    <img
                      className={RelevantProjectsStyles.card_img}
                      src={project.img}
                      alt={project.title}
                    />
                    <div className={RelevantProjectsStyles.card_info}>
                      <h3>{project.title}</h3>
                      <p>{project.title_desc}</p>
                    </div>
                    <div className={RelevantProjectsStyles.tags_container}>
                      {project.tech_stack.map((tech, index) => (
                        <p key={index}>{tech}</p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
    
          {/* Modal */}
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        </>
      );
}

export default RelevantProjects;

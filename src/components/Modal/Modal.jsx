// Modal.jsx
import React from "react";
import styles from "./Modal.module.css"; // create this file for styling

function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className={styles.close} onClick={onClose}>
          ✖
        </button>
        <img src={project.img} alt={project.title} className={styles.image} />
        <h2 className={styles.title}>{project.title}</h2>
        <p>{project.title_desc}</p>
        <div className={styles.tags}>
          {project.tech_stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
        <div className={styles.buttons}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
          {project.project_link && (
            <a
              href={project.project_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;

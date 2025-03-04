import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Projects.css';
import { projects_data } from '../data/projects';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className='pr-4'>
      <h1>Projects</h1>
      <div>
        <div className='card-container'>
          {projects_data?.map((project, index) => (
            <div key={project.id} className='project-card'>
              <h2 
                className='project-title'
                onClick={() => toggleExpand(project.id)}
              >
                {index + 1}. {project.title}
              </h2>
              <h3 className='fw-500 mt-0'>{project.subTitle}</h3>

              {expandedProject === project.id && (
                <div className='project-details'>
                  <div className='project-links'>
                  {/* <a href={`${project.githubUrl.frontend}`} target='_blank'>github</a> */}
                    <a href={`${project.githubUrl.frontend}`} target='_blank'><i className="bi bi-github"></i></a>
                    <a href={`${project.hostedUrl}`} target='_blank'><i class="bi bi-link-45deg"></i></a>
                    <a href={`${project.youtubeLink}`} target='_blank'><i className="bi bi-play-btn-fill"></i></a>
                  </div>

                  <div>
                    <h3 className='mb-0'>Tech: </h3>
                    <span className='ff-courier fw-bold'>Frontend:</span>
                    <span className='ff-courier'> {project.techStack.frontend.join(', ')} </span>

                    <span className='ff-courier fw-bold'>Backend:</span>
                    <span className='ff-courier'> {project.techStack.backend.join(', ')} </span>
                  </div>

                  <div>
                    <h3 className='mb-0'>Description:</h3>
                    <ol className='mt-0'>
                      {project.description.split('.').filter(sentence => sentence.trim() !== '').map((sentence, index) => (
                        <li key={index}>{sentence}.</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

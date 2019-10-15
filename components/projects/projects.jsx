import React from "react";
// import styled from "styled-components";

import projectData from "../../data/projects";

import ProjectEntry from "./projectEntry";

const Projects = () => (
    <ul>
        {projectData.map(project => (
            <ProjectEntry project={project} key={project.slug} />
        ))}
    </ul>
);

export default Projects;

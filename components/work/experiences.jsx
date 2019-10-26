import React from "react";
// import styled from "styled-components";

import experienceData from "../../data/experiences";

import ExperienceEntry from "./experienceEntry";

const Experiences = () => (
    <ul>
        {experienceData.map(experience => (
            <ExperienceEntry experience={experience} key={experience.slug} />
        ))}
    </ul>
);

export default Experiences;

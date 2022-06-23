import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard";
import experiences from "../data/experiences";

const Experience = () => {
  return experiences.map((experience) => (
    <ExperienceCard experience={experience} />
  ));
};

export default Experience;

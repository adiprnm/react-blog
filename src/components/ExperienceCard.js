import styled from "styled-components";
import Card from "./Card";
import Paragraph from "./Paragraph";

const JobTitle = styled.h3`
  color: #212121;
  margin: 0.5rem 0;
  font-size: 16pt;
`;

const Span = styled.span`
  color: #757575;
  margin: 0.15rem 0;
  font-size: 11pt;
`;

const ExperienceCard = () => {
  return (
    <Card>
      <JobTitle>Job Title</JobTitle>
      <Span>Company Name · Full-time</Span>
      <Span>Jan 2021 - Dec 2021</Span>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nobis
        optio, veritatis quibusdam voluptates dicta voluptate omnis? Amet,
        dolorem beatae! Sequi illo accusamus molestiae sed!
      </Paragraph>
    </Card>
  );
};

export default ExperienceCard;

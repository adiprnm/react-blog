import styled from "styled-components";

const Paragraph = styled.p`
  line-height: 1.5;
  text-align: justify;
`;

const About = () => {
  return (
    <Paragraph>
      A software engineer who loves clean code and challenges in every project
      I'm involved in. Having experience in enhancing, bug fixing, and
      integrating software with 3rd parties. My skills are, but are not limited
      to: Ruby on Rails, Laravel, and NodeJS.
    </Paragraph>
  );
};

export default About;

import { formatDistance, formatDuration, intervalToDuration } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import formatDate from "../lib/date";
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

const CardWithMargin = styled(Card)`
  margin: 1rem 0;
`;

function getDateDistance(start, end) {
  start = new Date(start)
  end = end ? new Date(end) : new Date()
  let duration = intervalToDuration({ start: start, end: end })
  duration = (({ years, months }) => ({ years, months }))(duration)
  return formatDuration(duration)
}

const ExperienceCard = ({ experience }) => {
  const timeFormat = "MMM yyyy"
  const endDate = experience.endDate
    ? formatDate(experience.endDate, timeFormat)
    : "present";
  const duration = getDateDistance(experience.startDate, experience.endDate)
  return (
    <CardWithMargin>
      <JobTitle>{experience.jobTitle}</JobTitle>
      <Span>
        {experience.companyName} · {experience.employmentType}
      </Span>
      <Span>
        {formatDate(experience.startDate, timeFormat)} - {endDate}  · {duration}
      </Span>
      <ReactMarkdown components={{ p: Paragraph }} children={experience.description} remarkPlugins={[remarkGfm]} />
    </CardWithMargin>
  );
};

export default ExperienceCard;

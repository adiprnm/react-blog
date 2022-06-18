import postsMock from "../mocks/posts";
import { useParams, Link } from "react-router-dom";
import formatDate from "../lib/date";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const params = useParams();
  const slug = params?.slug;
  const postDetail = postsMock.find((post) => post.slug === slug);

  return (
    <>
      <h1>{postDetail.title}</h1>
      <span>{formatDate(postDetail.date)}</span>
      <ReactMarkdown>{postDetail.body}</ReactMarkdown>
      <Link to="/">← Back to home</Link>
    </>
  );
}

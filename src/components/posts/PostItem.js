import { Link } from "react-router-dom";
import formatDate from "../../lib/date";

export default function PostItem({ title, date, slug }) {
  return (
    <>
      <Link to={`posts/${slug}`}>{title}</Link>
      <p>{formatDate(date)}</p>
    </>
  );
}

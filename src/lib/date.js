import { parseISO, format } from "date-fns";

export default function formatDate(date, fmt = "LLLL Mo, yyyy") {
  date = parseISO(date);
  date = format(date, fmt);
  return date;
}

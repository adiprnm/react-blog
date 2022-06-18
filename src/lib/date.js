import { parseISO, format } from "date-fns"

export default function formatDate(date) {
  date = parseISO(date)
  date = format(date, "LLLL Mo, yyyy")
  return date
}

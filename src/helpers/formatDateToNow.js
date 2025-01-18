import { formatDistanceToNow } from "date-fns"

const formatDateToNow = (date) => {
  return formatDistanceToNow(new Date(date), {addStuff: true})
}

export default formatDateToNow
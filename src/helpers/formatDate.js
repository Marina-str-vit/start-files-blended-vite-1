import { format } from "date-fns"

const formatDate = (date) => {
  return (
    format(new Date(date), "Pp")
  )
}

export default formatDate
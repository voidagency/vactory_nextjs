import { people } from "./data"

export const ListHandler = async (req, res) => {
  res.status(200).json(people)
}

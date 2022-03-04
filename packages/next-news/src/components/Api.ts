import { people } from "./data"

export const IdHandler = async ({ params: { id } }, res) => {
  const filtered = people.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}

export const ListHandler = async (req, res) => {
  res.status(200).json(people)
}

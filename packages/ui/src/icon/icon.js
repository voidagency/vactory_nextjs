import React from "react"

export const Icon = ({ id, ...props }) => (
  <svg {...props}>
    <use href={`/icons.svg#${id}`} />
  </svg>
)

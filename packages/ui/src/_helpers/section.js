import React from "react"

const colors = Array.from({ length: 9 }, (_, i) => `${i + 1}00`)

export const PlaceholderSections = () => {
  return (
    <>
      {colors.map((color) => (
        <div key={`bg-${color}`} className={`bg-slate-${color} py-24`} />
      ))}
    </>
  )
}

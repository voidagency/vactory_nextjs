import React from "react"
import { OfflineDetector } from "../offline"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
  return (
    <div className="relative">
      <PlaceholderSections />
      <OfflineDetector />
    </div>
  )
}

export default {
  title: "Components/Offline Status",
}

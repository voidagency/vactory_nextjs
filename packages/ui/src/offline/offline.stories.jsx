import React from "react"
import { OfflineDetector } from "@vactory/ui"
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

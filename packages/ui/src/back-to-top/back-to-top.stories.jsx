import React from "react"
import { Icon, BackToTop } from "@vactory/ui"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
  return (
    <div className="relative">
      <PlaceholderSections />
      <BackToTop />
    </div>
  )
}

export const CustomIcon = () => {
  return (
    <div className="relative">
      <PlaceholderSections />
      <BackToTop
        icon={
          <Icon
            id="bullhorn-marketing-affiliate-broadcast"
            width="50"
            height="50"
          />
        }
      />
    </div>
  )
}

export default {
  title: "Components/Back To Top",
}

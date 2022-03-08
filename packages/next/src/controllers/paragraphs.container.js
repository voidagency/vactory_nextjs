import React from "react"
import classNames from "classnames"
// import { StatePageSection } from "@gatsby/ui"
// import { Waypoint } from "react-waypoint"

const NarrowContainer = ({ children }) => {
  return <div className="container--narrow">{children}</div>
}

const FullContainer = ({ children }) => {
  return <div className="container--fluid">{children}</div>
}

const NoContainer = ({ children }) => {
  return <div className="no-container">{children}</div>
}

const layoutsMapping = {
  narrow_width: NarrowContainer,
  full_width: FullContainer,
  no_container: NoContainer,
}

export const ParagraphsContainer = ({
  children,
  id,
  style,
  layout,
  className,
  //   state,
}) => {
  const LayoutComponent = layoutsMapping[layout]
  const isBackgroundSolid = style.backgroundColor ? "has-background" : null
  //   let pageSection = StatePageSection.useContainer()
  //   const handleEnter = () => {
  //     if (state) {
  //       pageSection.setCurrentSection(state)
  //     }
  //   }
  return (
    <section
      className={classNames(className, isBackgroundSolid)}
      style={style}
      id={id}
    >
      {/* <Waypoint onEnter={handleEnter} /> */}
      <LayoutComponent>{children}</LayoutComponent>
    </section>
  )
}

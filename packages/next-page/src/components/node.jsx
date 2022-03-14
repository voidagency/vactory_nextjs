import React from "react"
import { ParagraphsController } from "@vactory/next"

export default function Node({ node }) {
  return (
    <React.Fragment>
      {node.field_vactory_paragraphs &&
        node.field_vactory_paragraphs.map((paragraph) => (
          <ParagraphsController
            key={paragraph.id}
            data={paragraph}
            hasAMP={false}
          />
        ))}
    </React.Fragment>
  )
}

import React from "react"
import { TechStack } from "."

export const ProjectLeft = ({ img, title, children, tech }) => {
  return (
    <div className="project">
      <div className={`${img}`} />
      <div className="project__description">
        <h6 className="project__title">{title}</h6>
        <div className="pin" />
        <p className="project__copy">{children}</p>
        <TechStack tech={tech} />
      </div>
    </div>
  )
}

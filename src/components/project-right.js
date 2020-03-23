import React from "react"

export const ProjectRight = ({ img, title, children }) => {
  return (
    <div className="project">
      <div className={`${img}`} />
      <div className="project__description">
        <h6 className="project__title">{title}</h6>
        <div className="pin" />
        <p className="project__copy">{children}</p>
      </div>
    </div>
  )
}

import React from 'react'

const ProjectSections = ({href, src, text}) => {
  return (
    <a className="project" href={href}>
        <img src={src} project="" />
        <h3>{text}</h3>
        <div className="readmore">Read More <i className="fa-solid fa-square-arrow-up-right" /></div>
    </a>
  )
}

export default ProjectSections
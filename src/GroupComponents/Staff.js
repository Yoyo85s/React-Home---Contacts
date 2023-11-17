import React from 'react'

const Staff = ({src, name, describe }) => {
  return (
    <div className="first">
        <img src={src} alt="" />
        <h3>{name}</h3>
        <p>{describe}</p>
    </div>
  )
}

export default Staff
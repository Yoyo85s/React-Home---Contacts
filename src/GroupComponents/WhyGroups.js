import React from 'react'

const WhyGroups = ({src, text, describe}) => {
  return (
    <div className="first-group">
          <div className="logo"><img src={src} alt /></div>
          <div className="writing">
            <div className="process">{text}</div>
            <p>{describe}</p>
          </div>
        </div>
  )
}

export default WhyGroups
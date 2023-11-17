import React from 'react'
import '../Assests/style.css'

const Sectionhead = ({text,describe}) => {
  return (
    <>
    <p>{text}</p>
    <h2>{describe}
    </h2>
    </>
  )
}

export default Sectionhead
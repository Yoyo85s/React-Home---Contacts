import React from 'react'
import Star from '../Assests/Images/Star.svg'

const ReviewBoxes = ({src, name, describe}) => {
  return (
    <div className="box1, box2, box3">
            <div className="container-all">
              <i><img src={Star} alt /></i>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <div className="container">
                <i><img src={src} alt /></i>
                <div className="name">
                  <h3>{name}</h3>
                  <p>{describe}</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ReviewBoxes
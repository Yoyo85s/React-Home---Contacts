import React from 'react'
import '../Geniral/Button.css'
import { Link } from 'react-router-dom'



const Button = ({type, text, url}) => {




  const getButtonClassName = () => {

    switch (type) {
        case 'yellow':
            return 'btn-yellow'
        case 'dark' :
            return 'btn-black'
        default :
            return 'btn-transparent'

    }

}


return (
  <div className="button">
  <Link to={url} className={getButtonClassName()}  >{text}<i className="fa-solid fa-square-arrow-up-right"></i></Link>
  </div>
)  








  
}

export default Button







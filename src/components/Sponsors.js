import React from 'react';
import '../Assests/style.css';
import Paperz from '../Assests/Images/paperz.svg';
import DORFUS from '../Assests/Images/DORFUS.svg';
import MARTINO from '../Assests/Images/MARTINO.svg';
import Square from '../Assests/Images/square.svg';
import Gobona from '../Assests/Images/Gobona.svg';






const Sponsors = () => {
  return (
    <section className="sponsors">
  <div className="container">
    <div><img src={Paperz} alt="paperz logo" /></div>
    <div><img src={DORFUS} alt="dorfus logo" /></div>
    <div><img src={MARTINO} alt="martino logo" /></div>
    <div><img src={Square} alt="square logo" /></div>
    <div><img src={Gobona} alt="gobona logo" /></div>
  </div>
</section>

  )
}

export default Sponsors
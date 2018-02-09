import React from 'react'

const Homepage = (props) => {
  return(
    <div className="intro">
      <h1><center>What is Homed<img src={require('../images/paw-p.png')}/>g?</center></h1>
      <h4 className="introText">Have an adorable furry friend but freaking out over the high cost of dog hotels in the city? Homedog is for you! We are a network of fellow dog-lovers who would be more than happy to dog-sit for you, at a fraction of the cost! You can also dog-sit for other memebers and receive awesome perks!</h4>
    </div>
  )
}

export default Homepage

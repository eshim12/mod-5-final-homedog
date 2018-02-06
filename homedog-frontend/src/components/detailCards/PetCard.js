import React from 'react';

const PetCard = ({pet, key}) => {
  return(
    <div key={key} className="ui card">
      <a className="image" href="#">
        <img src="/images/avatar/large/steve.jpg"/>
      </a>
      <div className="content">
        <a className="header" href="#">{pet.name}</a>
        <div className="meta">
          <a>{pet.description}</a>
        </div>
      </div>
    </div>
  )
}


export default PetCard

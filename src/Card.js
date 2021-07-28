import React from 'react';
import avtar from './avatar.png';
import './Card.css';
function Card({User}) {
  return (
   <div>
   <div className="container-fluid mt-5 mb-5">
  	<div className="row text-center">
  	 {
  	 	User.map((curElement)=>{
  	 		return(
  	 			<div className="col-md-5 col-sd-5 mt-5">
  	 			<div className="card w-100 h-100 p-2">
  	 			<div className="d-flex  align-items-center">
		<div className="image"><img src={avtar} className="rounded" width="155" alt="Avatar"></img></div>
		<div className="ml-3 text-align: justify my w-100">
		 <p>{curElement.name.title} {curElement.name.first} {curElement.name.last}</p>
		 <p className="adjustWord">{curElement.email}</p>
		  <p className="adjustWord">{curElement.location.street.number},{curElement.location.street.name},{curElement.location.city},{curElement.location.state},</p>
		  <p>{curElement.location.country},{curElement.location.postcode}</p>
		  </div>
		  </div>
		  </div>
		  </div>
		 
  
  	 			)

  	 	})
  	 }
  </div>
  </div>

   </div>
  );
}

export default Card;

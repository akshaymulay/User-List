import React, {useState,useEffect} from 'react';
import avtar from './avatar.png';
import './UserList.css';
const UserList=() =>{ 
	const [users,setUsers]=useState([]);
	const getUsers=async()=>{
		try{
		const response=await fetch('https://randomuser.me/api/?results=10');
		//setUsers(await response.json());
		const data=await response.json();
		setUsers(data.results);
	}catch (error) {
        console.log("error in Getting User Lists", error);
		}


	}

	useEffect(()=>{
		getUsers();
	},[]);
  return (
  	<>
  	<nav className="navbar navbar-nav navbar-light bg-light">
  <h1>User List</h1>
</nav>
  	<div className="container mt-5 mb-5">
  	<div className="row text-center">
  	 {
  	 	users.map((curElement)=>{
  	 		return(
  	 			<div className="col-15 col-md-5 mt-5">
  	 			<div className="card  p-2">
  	 			<div className="d-flex  align-items-center">
		<div className="image"><img src={avtar} className="rounded" width="155" alt="Avatar"></img></div>
		<div className="ml-3 w-100">
		 <p>{curElement.name.title} {curElement.name.first} {curElement.name.last}</p>
		 <p>{curElement.email}</p>
		  <span>{curElement.location.street.number},{curElement.location.street.name},{curElement.location.city},{curElement.location.state},</span>
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
<footer className="page-footer  bg-light">

  <div className="footer-copyright text-center py-3">© 2021 Copyright:
    <a  href="https://www.simulationhub.com/"> SimulationHub.com</a>
  </div>

</footer>
  </>
   
  );
}
export default UserList;
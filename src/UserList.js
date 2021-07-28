import React, {useState,useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
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
        console.log("error in Getting User List", error);
    }
  }
  useEffect(()=>{
    getUsers();
  },[]);
  return (
    <>
    <Navbar/>
    <div className="wrapper">
    <Card User={users}/>
    </div>
    <Footer/>
  </>
  
  );
}
export default UserList;
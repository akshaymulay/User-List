	
	export const getUsers=async()=>{
		try{
		const response=await fetch('https://randomuser.me/api/?results=10');
		const data=await response.json();
		return data;
	}catch (error) {
        console.log("error in Getting User List", error);
		}
}



useEffect(()=>{
    getUsers()
      .then(items => {
          setUsers(items.results);
      })
  },[]);
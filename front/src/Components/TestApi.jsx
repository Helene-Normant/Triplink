import apiService from '../apiService';
import React, { useEffect, useState } from 'react';

function TestApi() {

  const [usersLst, setUsers] = useState([]);

  const fetchCandidates = async () => {
    try {
        const usersList= await apiService.Users.get()
        setUsers(usersList)
    } catch (err) {
        console.error(err);
        alert(`Une erreur est survenue. \n${err}`)
    }
};
  console.log(usersLst);

useEffect(() => {
    fetchCandidates()
}, []);

return (
    <p>Test Api</p>
    )};
  
  export default TestApi;  

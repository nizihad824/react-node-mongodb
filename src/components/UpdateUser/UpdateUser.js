import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id}=useParams()
    const [user,setUser]=useState({});
    useEffect(()=>{
        const url =`http://localhost:5000/user/${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>{setUser(data)})

    },[])
    const handleUpdateUser =event =>{
        event.preventDefault()
        const name =event.target.name.value;
        const email =event.target.email.value;

        const updateUser ={name,email};

        // send data to the server
        const url=`http://localhost:5000/user/${id}`
        fetch(url,{
            method :'PUT',
            headers :{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateUser)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log('success',data)
            alert('User added successfully')
        })

    }
    return (
        <div>
            <h2>Updating User::{user.name}</h2>
            <h2>Update user</h2>
            <form onSubmit={handleUpdateUser} >
                <input type="text" name='name' placeholder='Name' required /><br />
                <input type="text" name='email' placeholder='Email' required /><br />
                <input type="submit" value="Update User" />

            </form>
            
        </div>
    );
};

export default UpdateUser;
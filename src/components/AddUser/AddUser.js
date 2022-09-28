import React from 'react';

const AddUser = () => {

    const handleAddUser =event =>{
        event.preventDefault()
        const name =event.target.name.value;
        const email =event.target.email.value;

        const user ={name,email};

        // send data to the server
        fetch('http://localhost:5000/user',{
            method :'POST',
            headers :{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log('success',data)
            alert('User added successfully')
        })

    }
    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser} >
                <input type="text" name='name' placeholder='Name' required /><br />
                <input type="text" name='email' placeholder='Email' required /><br />
                <input type="submit" value="Add User" />

            </form>
            
        </div>
    );
};

export default AddUser;
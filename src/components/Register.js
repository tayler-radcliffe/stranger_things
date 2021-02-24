import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';


const Register = ( { username, password, confirmedPassword, registerToken, setRegisterToken, setUsername, setPassword, setConfirmedPassword}) => {


    const registerUser = async (username, password) => {
      const resp = await fetch(
        "https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user: {
              username,
              password
            }
          })
        }
      );
        const data = await resp.json();
        const registerToken = data.data.token
        console.log(registerToken);
        setRegisterToken(registerToken);
        localStorage.setItem('registerToken', JSON.stringify(registerToken));
 };

 if(registerToken) {
    return <Redirect to = '/' /> }

    const handleClick = (event) => {
        event.preventDefault();
        registerUser(username, password).then((data) => {
})};

    
    return (
        <div>
        <form onSubmit={handleClick}>
            <h2>Register below:</h2>
            <label>Create a Username</label>
            <input type='text' value={username} placeholder='Username' min='8' max='20' required onChange={(e) => setUsername(e.target.value) }></input>
            <label>Create a Password</label>
            <input type='text' value={password} placeholder='Password' min='8' max='20' required onChange={(e) => setPassword(e.target.value) }></input>
            <label>Confirm Your Password</label>
            <input type='text' value={confirmedPassword} placeholder='Confirm Password' min='8' max='20' required onChange={(e) => setConfirmedPassword(e.target.value) }></input>
            <button type='submit'>Register</button>
        </form>
        <a href='/'>Already have an account? Sign in</a>
        </div>
    )
}

 

    
    // function performValidation() {
    //     /* Need to only run on submit. Possibly clear userName and password if invalid. */
    //     if (username.length < 8 || username.length > 20) {
    //         alert('Invalid Username: Must be between 8 and 20 characters.');
    //         return false;
    //     } else if (password.length < 8 || password.length > 20){
    //         alert('Invalid Password: Must be between 8 and 20 characters.')
    //         return false;
    //     } else if (password !== confirmedPassword){
    //         alert('Passwords do not match. Please try again.')
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }


export default Register;
import React, {useEffect, useState} from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import validator from 'validator'

function Signin(){
    
    const[username, setUsername ] = useState('');
    const[password, setPassword ] = useState('');
    const[errorMessage, setErrorMessage ] = useState('');
    const[token, setToken] = useCookies(['mr-token']);
    const[isLoginView, setIsLoginView ] = useState(true);
    const[userRegistered, setUserRegistered ] = useState(false);
 
    //const emailRegex = /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    useEffect( () =>{
        console.log(token)
         if(token['mr-token'] )  
            if(token['mr-token'] === 'undefined' )
            setErrorMessage('שם משתמש או סיסמא לא נכונים') 
            else
                window.location.href ='/HomePageScreen'; 
      }, [token])

    //   useEffect( () =>{
    //     console.log("in use effect og registration")
    //     API.registerUserProfile(username)
    //         .then( resp => console.log(resp))
    //         //.then( resp => console.log(resp))                
    //         .catch( error => console.log(error))
    //     setUserRegistered(false);
    //   }, [userRegistered])


  

    const loginClicked = () =>  {
        console.log(username, password)
        API.loginUser({username, password})
            //.then( resp => console.log(resp.username))
            .then( resp => setToken('mr-token', resp.token))
            .catch( error => console.log(error))     
    }
    const registerClicked = () =>  {
        if (!validator.isEmail(username))
            setErrorMessage('שם משתמש לא חוקי');
        else if (password=="")    // errorMessage = 'שם משתמש לא חוקי'
            setErrorMessage('הכנס סיסמא');
        else{
            setErrorMessage('');
            registerUser();
            createUserProfile()
            // API.registerUser({username, password})
            //     .then( resp => console.log(resp))
            //     //.then( await createUserProfile(username))
            //     .catch( error => console.log(error))
            // await createUserProfile(username)
        }    
    }
    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }
    const registerUser = () =>  {
        API.registerUser({username, password})
                .then( resp => console.log(resp))
                .then( setUserRegistered(true))
                .catch( error => console.log(error))
                //setUserRegistered(true)     
    }
    const createUserProfile =  () => {       
        console.log("gfhfghghf")
        sleep(100).then(()=>{
        API.registerUserProfile(username)
            .then( resp => console.log(resp))                
            .catch( error => console.log(error)) 
        })
    }

    return (
          <div className="App">
             {isLoginView ?  <h1>!התחבר</h1> : <h1>!הירשם</h1>}
             <p style={{color : "red"}}>{errorMessage}</p>
             <label htmlFor="username">Username</label><br/>
             <input id="username" type="text" placeholder="username" value={username}
                     onChange={ evt=> setUsername(evt.target.value)}   
              /><br/>
             <label htmlFor="password">Password</label><br/>
              <input id="password" type="password" placeholder="password" value={password}
                     onChange={ evt=> setPassword(evt.target.value)}/><br/>
             {isLoginView ?  
                <button onClick={loginClicked}>התחבר</button>:
                <button onClick={registerClicked}>הירשם</button>}
                {isLoginView ? 
                  <p onClick={() => setIsLoginView(false)}> אם אינך רשום לאתר - הירשם כאן</p>: 
                  <p onClick={() => setIsLoginView(true)}>  אם הינך רשום לאתר - התחבר כאן</p>
                }
{/* <button onClick={() => createUserProfile(username)}>לחץ כאן</button> */}
            </div>
    
      )

}
export default Signin;


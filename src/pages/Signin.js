import React, {useEffect, useState} from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';

function Signin(){
    
    const[username, setUsername ] = useState('');
    const[password, setPassword ] = useState('');

    const[token, setToken] = useCookies(['mr-token']);
 
    useEffect( () =>{
        console.log(token)
        if(token['mr-token']) 
            window.location.href ='/HomePageScreen'; 
      }, [token])

    const[isLoginView, setIsLoginView ] = useState(true);

    const loginClicked = () =>  {
        API.loginUser({username, password})
            .then( resp => setToken('mr-token', resp.token))
            .catch( error => console.log(error))     
    }
    const registerClicked = () =>  {
        API.registerUser({username, password})
            .then( resp => console.log(resp))
            .catch( error => console.log(error))     
    }

    return (
          <div>
             {isLoginView ?  <h1>!התחבר</h1> : <h1>!הירשם</h1>}
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

            </div>
    
      )

}
export default Signin;

import React, {useEffect, useState} from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import validator from 'validator'

function UserRegistration(){
    
    const[username, setUsername ] = useState('');
    const[password, setPassword ] = useState('');
    const[errorMessage, setErrorMessage ] = useState('');
    const[token, setToken] = useCookies(['mr-token']);
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('username');
    const IdClassFromURL = params.get('idClass');
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
   
    useEffect( () =>{
        setUsername(IdFromURL);
      }, [])

      function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }

      const backToClass= () =>  {
        window.location.href ='/TeachersScreen?class=' + IdClassFromURL;
        }

    const registerClicked = () =>  {
        if (!validator.isEmail(username))
            setErrorMessage('שם משתמש לא חוקי');
        else if (password=="")    // errorMessage = 'שם משתמש לא חוקי'
            setErrorMessage('הכנס סיסמא');
        else{
            setErrorMessage('');
            API.registerUser({username, password})
                .then( resp => console.log(resp))
                .then(setUsername(''))
                .then( setPassword(''))
                .then( setErrorMessage('משתמש נרשם בהצלחה'))
                .then(createUserProfile)
                .catch( error => console.log(error)) 
            if (checked)
            {
                sleep(1000).then(()=>{
                console.log("checked!",IdClassFromURL+ " "+ username )
                API.addStudentToClass(IdClassFromURL, username);
                })
            }
        }    
    }
    const createUserProfile =  () => {       
        sleep(100).then(()=>{
        API.registerUserProfile(username)
            .then( resp => console.log(resp))                
            .catch( error => console.log(error)) 
        })
    }

    return (
          <div className="App">
           <h1>הרשמת משתמשים</h1>
             <p style={{color : errorMessage=="משתמש נרשם בהצלחה" ? "green" : "red"}}>{errorMessage}</p>
             <label htmlFor="username">Username</label><br/>
             <input id="username" type="text" placeholder="username" value={username}
                     onChange={ evt=> setUsername(evt.target.value)}   
              /><br/>
             <label htmlFor="password">Password</label><br/>
              <input id="password" type="password" placeholder="password" value={password}
                     onChange={ evt=> setPassword(evt.target.value)}/><br/>
              <br/>
              <label>
              <input type="checkbox"  checked={checked}
               onChange={handleChange}/>
               רשום אוטומטית לכיתה
              </label><br/>
                <button onClick={registerClicked}>רשום משתמש</button><br/><br/>
                <button onClick={backToClass}>חזרה לכיתה</button>

            </div>
    
      )

}
export default UserRegistration;


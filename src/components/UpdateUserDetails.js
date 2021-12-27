import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import Signin from '../pages/Signin'; 
import '../index.css';
//import UpdateUserDetails from '../components/UpdateUserDetails'
const axios = require('axios');
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
const UpdateUserDetails = () => {
    
      
    const [token, setToken, deleteToken] = useCookies(['mr-token']);
    const [user,setUser] = useState([]);
    useEffect(()=>{
        //var username = Signin.username
        //console.log("username is:",username)
        API.getUserDetails(token['mr-token'])
         //.then(resp => console.log("resp is:", resp.results))
         .then(resp => setUser(resp.results))  
         .catch( error => console.log(error)) 
    }, [])
    return(
        <div className="App">
        <header className="Header">דף שינוי פרטים</header>
        <div className="updateProfile">
            <div>
        <h4>שם משתמש:</h4>
         <p>{user.username}</p>

         <br/>

         <h4>שם פרטי: </h4><button onClick={this.togglePopup.bind(this)}>Edit</button>
         <h4>שם פרטי: </h4><button >Edit</button>
         <p>{user.firstName}</p>
         <br/>

       <h4>שם משפחה:</h4>
       <h4>שם משפחה:</h4><button>Edit</button>
       <p>{user.lastName}</p>
       </div>
        <div>
        <h4>דואר אלקטרוני:</h4>
        <h4>דואר אלקטרוני:</h4><button>Edit</button>
       <p>{user.email}</p>

       <h4>קצת עליי..</h4>
       <h4>קצת עליי..</h4><button>Edit</button>
       <p>{user.aboutMe}</p>
       </div>
       <div>
       <h4>תחביבים:</h4>
       <h4>תחביבים:</h4><button>Edit</button>
       <p>{user.hobbies}</p>
       </div>
       </div>
        <button>שמירת נתונים </button>
        </div>
    )
} 
           
export default UpdateUserDetails;
import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import Signin from '../pages/Signin'; 
import { useHistory } from "react-router-dom";

import '../index.css';
import UpdateUserDetails from '../components/UpdateUserDetails'
const axios = require('axios');


const ProfileScreen = () => {
    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/UpdateUserDetails");
      }
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
        <header className="Header">דף פרופיל</header>
        <div className="profile">
            <div>
        <h4>שם משתמש:</h4>
         <p>{user.username}</p>
        
         <br/>

         <h4>שם פרטי: </h4>
         <p>{user.firstName}</p>
         <br/>

       <h4>שם משפחה:</h4>
       <p>{user.lastName}</p>
       </div>
        <div>
        <h4>דואר אלקטרוני:</h4>
       <p>{user.email}</p>
         
       <h4>קצת עליי..</h4>
       <p>{user.aboutMe}</p>
       </div>
       <div>
       <h4>תחביבים:</h4>
       <p>{user.hobbies}</p>
       </div>
       </div>
        <button onClick={handleRoute}>עדכון פרטים</button>
        </div>
    )
}
        



//         <div className="App">
//         <header className="Header">דף פרופייל</header>
//         <div className="profile">
//          {user.username}: שם משתמש 
//         </div>
//         <div>
//        :שם פרטי 
//         </div>
//         <div>
//         : שם משפחה
//         </div>
//         <div>
//         : דואר אלקטרוני 
//         </div>
//         <div>
//        : גיל
//         </div>
//         <div>
//        : תחביבים
//         </div>
//         <button onClick={UpdateUserDetails}>עדכון פרטים</button>
//         </div>
//     )
// }
 /*
class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
            uploadedFile:null
        }
    }
    fetchUserDetails=(user_id)=>{
        //console.log(user_id);
        axios.get("http://127.0.0.1:8000/main/users/"+user_id,{
            headers: {
                "content-type": "application/json"
              } 
        }).then(res=>{
            console.log(res);
            this.setState({email:res.data.results[0].email});
            this.setState({profileImage:res.data.results[0].profileImage})
        })
        .catch(err=>console.log(err))
    }
    render(){
        return (
            <Container>
            <Row>
           
            <Col>
                <h1>User Profile</h1>
                <Form className="form">     
        <p>{this.state.msg}</p>
      <Form.Group controlId="formCategory1">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" defaultValue={this.state.username}/>     
      </Form.Group>
      <Form.Group controlId="formCategory2">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" defaultValue={this.state.email} />     
      </Form.Group>
      <Form.Group controlId="formCategory3">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" name="firstname" onChange={this.changefirstname}/>
        </Form.Group>
        <Form.Group controlId="formCategory4">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" name="lastname" onChange={this.changelastname}/>
        </Form.Group>
        <Form.Group controlId="formCategory5">
        <Form.Label>Skills:</Form.Label>
        <Form.Control type="text" name="skills" onChange={this.changeskills}/>
        </Form.Group>
      <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
      </Form>
       </Col>
    
           </Row>
            </Container>
        )
    }
    
}
*/
export default ProfileScreen;
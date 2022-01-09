import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import Signin from './Signin'; 
import { useHistory } from "react-router-dom";

import '../index.css';
import UpdateUserDetails from '../components/UpdateUserDetails'
const axios = require('axios');


const UserProfile = () => {
    console.log("hiiiiiiiiii");
    // const history = useHistory();
    // const handleRoute = () =>{ 
    //     history.push("/UpdateUserDetails");
    //   }
    const [token] = useCookies(['mr-token']);
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id');

    const [user,setUser] = useState([]);
    const [courses,setCourses] = useState([]);
    const [userCourses, setUserCourses] = useState([]);

    //   test
    const [studentsInClass, setsStudentsInClass] = useState([]);



    useEffect(()=>{
        
        API.getUserProfileById(IdFromURL)
         .then(resp => setUser(resp))  
         .catch( error => console.log(error)) 
      //  if(!token['mr-token']) window.location.href = '/Signin';
 
        // API.getUserDetails(token['mr-token'])

        //  .then(resp => setUser(resp.results))  
        //  .catch( error => console.log(error)) 
        // API.getAllUserCourses(token['mr-token'])
        //     .then(resp => getCourseName(resp.results)) 

        //     .catch( error => console.log(error))


            /////todo - add int value
            API.getClassStudentsByID(2)
            .then(resp => setsStudentsInClass(resp.results)) 
            .catch( error => console.log(error))
    }, [])

    // const getCourseName = (courses) =>{
    //     console.log("in fun",courses)
    //     courses.map(course => { 

    //         API.getCourses(course.course) 

    //              .then(resp => setUserCourses((userCourses) => [...userCourses, resp]))

    //  }) 
    
    // }
    
    return(
        <div className="App">
        <header className="Header"> הדף של {user.firstName}  {user.lastName}</header>
        <div className="profile">
            <div>
        <h4>שם משתמש:</h4>
         <p>{user.username}</p>

         {/* test */}
         {console.log("user class is: ",user.studentClasses && user.studentClasses[0].className)}
         {console.log("the students in class number 2 are: ",studentsInClass)}
        
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

       <h4>הקורסים שלי:</h4>

        { userCourses.map(course => { 
                return <p>
                 
                  <p>
                  {course.name} </p> 
              
            
            </p> 
               
          })}
      



      
       </div>
       <div>
       <h4>תחביבים:</h4>
       <p>{user.hobbies}</p>
       <br/>
       <h4>הבאדג'ים שלך:</h4>
         <p>{user.badges}</p>
        
         <br/>
         <h4>המטרה שלי:</h4>
         <p>{user.myGoal}</p>
       </div>
       </div>
        {/* <button onClick={handleRoute}>עדכון פרטים</button> */}
        </div>
    )
}

export default UserProfile;
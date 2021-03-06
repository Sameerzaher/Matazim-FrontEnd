import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';
import Popup from '../components/Popup';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const CheckUserAssignments = () => {
  const[token] = useCookies(['mr-token']);
   const [user,setUser] = useState([]);
   const [userCourses, setUserCourses] = useState([]);
   const [userAnswers, setUserAnswers] = useState([]);
   const [selectedCourse, setSelectedCourse] = useState();
   const [studentInClass, setsStudentsInClass] = useState([]);
   const [teachersInClass, setsTeachersInClass] = useState([]);
   const [coordinatorsInClass, setsCoordinatorsInClass] = useState([]);
   const search = window.location.search; // returns the URL query String
   const params = new URLSearchParams(search); 
   const IdUserFromURL = params.get('id');
   const lessonsList =[];
   const options=[];
   const defaultOption = '';
  

  useEffect(() =>{
    if(!token['mr-token']) window.location.href = '/Signin';
    //console.log("idfromurl is: ", IdClassFromURL)
    API.getUserDetails(token['mr-token'])
      .then(resp => setUser(resp.results))  
      .catch( error => console.log(error))
   
    sleep(1000).then(()=>{
    //get all the courses belong to the selected user
     API.getAllCoursesByUserId(IdUserFromURL)
        .then(resp => getCourseName(resp.results)) 
        .catch( error => console.log(error))
      })
    
    }, [])

    const getCourseName = (courses) =>{
        courses.map(course => { 
            API.getCourses(course.course) 
                 .then(resp => setUserCourses((userCourses) => [...userCourses, resp]))
     })     
    }


      function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }


    const getCourseDetails= () =>  { 
        API.getUserAnswersById(IdUserFromURL)
        .then(resp => setUserAnswers(resp.results)) 
        .catch( error => console.log(error)) 
        sleep(1000).then(()=>{
            console.log(userAnswers)
        })
    }

    function handleChange(event) {
      console.log("event is: ",event);
      
      for (var i = 0; i < options.length; i++) {
        if(options[i].value == event.value ){
          console.log(options[i].key);
          setSelectedCourse(options[i].key);
          getCourseDetails()

          break;
        }
    } 
         }

 
    return (   

    <div className="App">

      <h1>?????????? ??????????</h1>
      {/* insert to options all the courses belong to this user this user.
      insert the course id as a key and the course name as the value.
      the value will be shown in the dropdown */}
      { userCourses.map(course => {
         
          {console.log("course is: ",course)}
                  {options.push({key:course.id,value:course.name})}       
          })}
    
    {/* the dropdown will hold the courses of the user and will display them by their names*/}
    <Dropdown className='dropdown' options={options} value={defaultOption} label={defaultOption.key} onChange={handleChange}  placeholder="?????? ????????" />
    <div className="profile">
    <div>
    <h3>??????????????:</h3>
      { userCourses.map(course => { 
              if(course.id === selectedCourse){
      
                {lessonsList.push(course.lessons)}
               
                return <p>{course.lessons.map((lesson) =>

                <p>
                <p > { lesson.name } </p> <br/></p>

             )} </p>
                }     
          })}
</div>
      <div>
       {/* show on the screen the assignments belong to the chosen course */}
      <h3>??????????:</h3>
      { userCourses.map(course => { 
              if(course.id === selectedCourse){
      
                {lessonsList.push(course.lessons)}
               
                return <p>{course.lessons.map((lesson) =>

                <p>
                <p > { lesson.assignment=="null"? "?????? ???????? ???????????? ????": lesson.assignment } </p> <br/></p>

             )} </p>
                }     
          })}




             
</div>
<div>
<h3>????????????:</h3>

{userAnswers && userAnswers.map(lesson => { 
    // console.log("lesson list is: ", lessonsList[0])
    //     {if (lesson.id === lessonsList[0])
    //     console.log("success")
    //     }
               return <p>
                <p > {lesson.answer} </p> <br/></p>
              })}
     {/* })     }       */}
  </div>

    </div>
   
   
    </div>
     
   
   
   
  );
  
};

export default CheckUserAssignments;
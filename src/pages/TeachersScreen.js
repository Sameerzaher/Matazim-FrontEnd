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

const TeachersScreen = () => {
  const[token] = useCookies(['mr-token']);
  const [user,setUser] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [studentInClass, setsStudentsInClass] = useState([]);
  const [teachersInClass, setsTeachersInClass] = useState([]);
  const [coordinatorsInClass, setsCoordinatorsInClass] = useState([]);
  const [addStudentPopup, setAddStudentPopup] = useState(false);
  const [removeStudentPopup, setRemoveStudentPopup] = useState(false);
  const [userToSearch, setUserToSearch] = useState();
  const [userToRemove, setUserToRemove] = useState([]);
  const [userToAdd, setUserToAdd] = useState([]);
  const [addedSuccesfullyMessage, setAddedSuccesfullyMessage] = useState('');
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdClassFromURL = params.get('class');

  const options=[];
  const defaultOption = '';
  

  useEffect(() =>{
    if(!token['mr-token']) window.location.href = '/Signin';
    console.log("idfromurl is: ", IdClassFromURL)
    API.getUserDetails(token['mr-token'])
      .then(resp => setUser(resp.results))  
      .catch( error => console.log(error))
   
    sleep(1000).then(()=>{
      console.log("type of user is: ", user)
      if(user.userType == "1") window.location.href = '/Signin';
      })
    
    }, [])

    //try
    useEffect(() =>{
      addClasses();
      }, [user])

      function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time)
      )
  }

    const getDataOfClass= (numOfClass) =>  { 
      console.log("2- class is: ", selectedClass)
      API.getClassStudentsByID(numOfClass)
      .then(resp => setsStudentsInClass(resp.results)) 
      .catch( error => console.log(error))
      API.getClassTeacherssByID(numOfClass)
      .then(resp => setsTeachersInClass(resp.results)) 
      .catch( error => console.log(error))
      API.getClassCoordinatorsByID(numOfClass)
      .then(resp => setsCoordinatorsInClass(resp.results)) 
      .catch( error => console.log(error))
      }

    function handleChange(event) {
      console.log("event is: ",event);
      
      for (var i = 0; i < options.length; i++) {
        if(options[i].value == event.value ){
          console.log(options[i].key);
          setSelectedClass(options[i].key);
          console.log("class is: ", selectedClass)
          getDataOfClass(options[i].key)
          break;
        }
    } 
     
     
    }

    function setGivenClass() {
        console.log("im hereeeee")
        console.log( options.length)
      for (var i = 0; i < options.length; i++) {
         console.log(options[i].key, " ",options[i].value )
        if(options[i].key == IdClassFromURL ){
          console.log("we are inide if ", options[i].key);
          setSelectedClass(options[i].key);
          console.log("class is: ", selectedClass)
          getDataOfClass(options[i].key)
          break;
        }
    }    
    }


    const viewProfile = (user) =>{
      console.log("id must be 20: ", user.id)
      window.location.href ='/UserProfile?id=' + user.id+ "&idUser=" + user.user+"&idClass=" + selectedClass; 
    }
    const goToSignIn = (username) =>{
      console.log("user to regiser: ",username)
      window.location.href ='/UserRegistration?username=' + username+"&idClass=" + selectedClass; 
    }
    const addUser = (username) =>{
      //console.log("details", username, " ", selectedClass)
      API.addStudentToClass(selectedClass, username);
      // setUserToAdd('');
      setAddedSuccesfullyMessage("התלמיד נוסף בהצלחה");
      getDataOfClass(selectedClass);
      sleep(100).then(()=>{
      API.getClassStudentsByID(selectedClass)
        .then(resp => setsStudentsInClass(resp.results)) 
        .catch( error => console.log(error))
      
      console.log("studentInClass: ", studentInClass)
      // setsStudentsInClass((studentInClass) => [...studentInClass, userToAdd])
      setsStudentsInClass(() => [...studentInClass, userToAdd])
      setUserToAdd('');
      })
    }
    
    const addStudent= () =>  {
      setAddStudentPopup(true)
      }

    const candidateToRemove= (userToRemove) =>  {
      console.log("candidate: ", userToRemove.username)
      setUserToRemove(userToRemove)
      setRemoveStudentPopup(true)
      }

      const removeStudent= (userToRemove) =>  {
        console.log("user to remove: ",userToRemove, selectedClass)
        API.removeStudentFromClass(selectedClass, userToRemove);
        sleep(100).then(()=>{
          API.getClassStudentsByID(selectedClass)
            .then(resp => setsStudentsInClass(resp.results)) 
            .catch( error => console.log(error))  
        setUserToRemove('')
        setRemoveStudentPopup(false)
        })
        }

      const searchUser= () =>  { 
        setUserToAdd('null');
        console.log("user to add is: ", userToSearch)
        API.getUserByUsername(userToSearch) 
        //  .then(resp => console.log("user: ",resp.results))  
          .then(resp => setUserToAdd(resp.results))  
          .catch( error => console.log(error))  
        }
        //uplaod the data of the class after return to this page from userProfile
        const addClasses= () =>  { 
          if(IdClassFromURL==null){
            console.log("IdClassFromURL is null")
            return 
          }
          console.log("im in addClasses")
          user.teacherClasses && user.teacherClasses.map(teacherclass => { 
            console.log("inside map")     
            options.push({key:teacherclass.id,value:teacherclass.className})
          })
          setGivenClass();
        }
    return (   
    
    <div className="App">
       {console.log("in return type of user is: ", user.userType)}
       { user.userType=="1"? window.location.href = '/Homepagescreen': " "}
      {/* <FontAwesomeIcon icon={faTimesCircle} />   */}
      <h1>הדרכה</h1>
      {/* insert to options all the classes guided by this user.
      insert the class id as a key and the class name as the value.
      the value will be shown in the dropdown */}
      {user.teacherClasses && user.teacherClasses.map(Teacherclass => {
                  {options.push({key:Teacherclass.id,value:Teacherclass.className})}       
          })}
    
    {/* the dropdown will hold the classes of the user and will display them by their names*/}
    <Dropdown className='dropdown' options={options} value={defaultOption} label={defaultOption.key} onChange={handleChange}  placeholder="בחר כיתה" />
    <div className="profile">
      <div>
      <h3>תלמידים:</h3>
      {/*add the usernames of all the students of the selected class */}
    {studentInClass.map(student => { 
      {console.log("inside map")}
                    return <p>
                        {/* <FontAwesomeIcon className='username' icon={faTimesCircle} data-tip={"הסר"} onClick={() => removeStudent(student.username)}/> */}
                        <FontAwesomeIcon className='username' icon={faTimesCircle} data-tip={"הסר"} onClick={() => candidateToRemove(student)}/>
                         <ReactTooltip />
                         &nbsp;
                         {/* working example with tooltip */}
                        {/* <span className='username' data-tip={student.firstName+ " "+ student.lastName}  onClick={() => viewProfile(student)} >
                        {student.firstName+ " "+ student.lastName}
                        </span> 
                      
                         <ReactTooltip /> */}
                         <span className='username'   onClick={() => viewProfile(student)} >
                        {student.firstName+ " "+ student.lastName}
                        </span> 
                      
                         
                         {/* <button onClick={() => removeStudent(student.username)}>הסר</button>  */}
                         
                         {/* <FontAwesomeIcon icon={faTimesCircle} data-tip={"הסר"} onClick={() => removeStudent(student.username)}/>
                         <ReactTooltip /> */}
                         <br/></p> 
                        {/* <p className='username' data-tip={student.username} data-for="registerTip" onClick={() => viewProfile(student)} >
                        {student.username}
                         </p> <br/> */}
      {/* <ReactTooltip id="registerTip" place="top" effect="solid">
        {student.username}
        {/* {student.firstName+ " "+ student.lastName} */}
      {/* </ReactTooltip> */} 
               
                      
              })}
      {/* <ReactTooltip id="registerTip" place="top" effect="solid">
        {student.firstName+ " "+ student.lastName}
      </ReactTooltip> */}
               <Button style={{display : selectedClass  ? "": "none"}} onClick={addStudent}>הוסף תלמיד</Button> 
</div>
<div>
<h3>מטצים:</h3>
    {teachersInClass.map(teacher => { 
                    return <p>
                      
                      <p className='username' onClick={() => viewProfile(teacher)}>
                      {teacher.firstName+ " "+ teacher.lastName} </p> <br/>
                     
                </p>                  
              })}
             
  </div>
  <div>
<h3>רכזים:</h3>
    {coordinatorsInClass.map(coordinator => { 
                    return <p>
                      
                      <p className='username' onClick={() => viewProfile(coordinator)}> 
                      {coordinator.firstName+ " "+ coordinator.lastName} </p> <br/>
                      {/* <ReactTooltip /> */}
                </p>                  
              })}
              </div>
    </div>
    <Popup trigger={addStudentPopup} setTrigger={setAddStudentPopup}>
     <h4>חפש שם משתמש של תלמיד</h4>
     <input type = "text" onChange={e => setUserToSearch(e.target.value) + setAddedSuccesfullyMessage('')}></input>
         
     
         <button onClick={searchUser}>חפש</button>
         {console.log("users are: ",userToAdd.id)}
         <h5>{userToAdd!="null"?  userToAdd.username: " לא נמצא שם משתמש"}</h5>
         {<button  style={{display : userToAdd!="null"  ? "none": ""}} onClick={() => goToSignIn(userToSearch)}>רשום משתמש</button>}
         <p>{userToAdd.id && userToAdd.firstName + " "+ userToAdd.lastName}</p>
         {/* <p>{userToAdd && userToAdd.lastName}</p> */}
         {<button  style={{display : userToAdd.id  ? "": "none"}} onClick={() => addUser(userToAdd.username)}>הוסף</button>}
         <p>{addedSuccesfullyMessage}</p>    

   </Popup> 
   <Popup trigger={removeStudentPopup} setTrigger={setRemoveStudentPopup}>
   <h4> ?מהכיתה {userToRemove.username} האם אתה בטוח שברצונך להסיר את </h4> 
   
        {/* <h4> ?{userToRemove[0].username} האם אתה בטוח שברצונך להסיר את </h4>  */}
        {/* <button onClick={removeStudent(userToRemove)}>הסר</button> */}
        {<button  style={{display : userToRemove.id  ? "": "none"}} onClick={() => removeStudent(userToRemove.username)}>הסר</button>}
   </Popup>     
   
    </div>
     
   
   
   
  );
  
};

export default TeachersScreen;
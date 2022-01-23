import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';
import Popup from '../components/Popup';
import ReactTooltip from 'react-tooltip';


const TeachersScreen = () => {
  const[token] = useCookies(['mr-token']);
  const [user,setUser] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [studentInClass, setsStudentsInClass] = useState([]);
  const [teachersInClass, setsTeachersInClass] = useState([]);
  const [coordinatorsInClass, setsCoordinatorsInClass] = useState([]);
  const [addStudentPopup, setAddStudentPopup] = useState(false);
  const [userToSearch, setUserToSearch] = useState();
  const [userToAdd, setUserToAdd] = useState([]);
  const [addedSuccesfullyMessage, setAddedSuccesfullyMessage] = useState('');
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdClassFromURL = params.get('class');

  const options=[];
  const defaultOption = '';
  

  useEffect(() =>{
    console.log("idfromurl is: ", IdClassFromURL)
    API.getUserDetails(token['mr-token'])
      .then(resp => setUser(resp.results))  
      .catch( error => console.log(error))
    // addClasses(); 

    // setGivenClass();
    }, [])

    //try
    useEffect(() =>{
      addClasses();
      }, [user])

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
    const addUser = (username) =>{
      //console.log("details", username, " ", selectedClass)
      API.addStudentToClass(selectedClass, username);
      // setUserToAdd('');
      setAddedSuccesfullyMessage("התלמיד נוסף בהצלחה");
      getDataOfClass(selectedClass);
      // API.getClassStudentsByID(selectedClass)
      // .then(resp => setsStudentsInClass(resp.results)) 
      // .catch( error => console.log(error))
 
      console.log("studentInClass: ", studentInClass)
      // setsStudentsInClass((studentInClass) => [...studentInClass, userToAdd])
      setsStudentsInClass(() => [...studentInClass, userToAdd])
      setUserToAdd('');
    }
    
    const addStudent= () =>  {
      setAddStudentPopup(true)
      }

      const removeStudent= (userToRemove) =>  {
        console.log("user to remove: ",userToRemove, selectedClass)
        API.removeStudentFromClass(selectedClass, userToRemove);
        
        //setsStudentsInClass(studentInClass.splice(2,1))
        }

      const searchUser= () =>  { 
        setUserToAdd('null');
        console.log("user to add is: ", userToSearch)
        API.getUserByUsername(userToSearch) 
        //  .then(resp => console.log("user: ",resp.results))  
          .then(resp => setUserToAdd(resp.results))  
          .catch( error => console.log(error))  
        }
  /////////////////////////////////////////////////////try
        const addClasses= () =>  { 
          if(IdClassFromURL==null){
            console.log("IdClassFromURL is null")
            return 
          }
          console.log("im in addClasses")
          user.studentClasses && user.studentClasses.map(Studentclass => { 
            console.log("inside map")     
            options.push({key:Studentclass.id,value:Studentclass.className})
          })
          setGivenClass();
        }
    return (   
    <div className="App">
      <h1>הדרכה</h1>
      {console.log("beginig of return")}
     {user.studentClasses && user.studentClasses.map(Studentclass => { 
                  
                  {options.push({key:Studentclass.id,value:Studentclass.className})}
                  
                  
             
               
          })}
    


      
      {/* Current Value: <strong>{value}</strong> */}
    
    <Dropdown className='dropdown' options={options} value={defaultOption} label={defaultOption.key} onChange={handleChange}  placeholder="בחר כיתה" />
    <div className="profile">
      <div>
      <h3>תלמידים:</h3>
      {console.log("beginig of map", studentInClass)}
      {/*add the usernames of all the students of the selected class */}
    {studentInClass.map(student => { 
      {console.log("inside map")}
                    return <p>
                        
                        <p className='username' data-tip={student.firstName+ " "+ student.lastName}  onClick={() => viewProfile(student)} >
                         {student.username}
                        </p> 
                         <ReactTooltip />
                         <button onClick={() => removeStudent(student.username)}>הסר</button> 
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
                      
                      <p className='username' data-tip={teacher.firstName+ " "+ teacher.lastName} onClick={() => viewProfile(teacher)}>
                      {teacher.username} </p> <br/>
                      <ReactTooltip />
                </p>                  
              })}
             
  </div>
  <div>
<h3>רכזים:</h3>
    {coordinatorsInClass.map(coordinator => { 
                    return <p>
                      
                      <p className='username' data-tip={coordinator.firstName+ " "+ coordinator.lastName} onClick={() => viewProfile(coordinator)}> 
                      {coordinator.username} </p> <br/>
                      <ReactTooltip />
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
         <p>{userToAdd && userToAdd.firstName}</p>
         <p>{userToAdd && userToAdd.lastName}</p>
         {<button  style={{display : userToAdd.id  ? "": "none"}} onClick={() => addUser(userToAdd.username)}>הוסף</button>}
         <p>{addedSuccesfullyMessage}</p>    

         {/* <input type = "text" value={answer} 
         onChange={e => setAnswer(e.target.value)} */}
         {/* ></input> */}
   </Popup>   
   
    </div>
     
   
   
   
  );
  
};

export default TeachersScreen;
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import { Button } from 'react-bootstrap';
import Popup from '../components/Popup';

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
  
  // const options = [{key:'101',value:'Lion'},
  // {key:'102',value:'Giraffe'},
  // {key:'103',value:'Zebra'},
  // {key:'104',value:'Hippo'},
  // {key:'105',value:'Penguin'}];
  // const options=[{key:'101',value:'Lion'}];
  //var value ='';
  const options=[];
  const defaultOption = '';
  // options[0];

  useEffect(() =>{
    API.getUserDetails(token['mr-token'])
      .then(resp => setUser(resp.results))  
      .catch( error => console.log(error)) 
    
    }, [])

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
      console.log(event);
      
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

    const viewProfile = (user) =>{
      window.location.href ='/UserProfile?id=' + user.id; 
    }
    const addUser = (username) =>{
      //console.log("details", username, " ", selectedClass)
      API.addStudentToClass(selectedClass, username);
      setUserToAdd('');
      setAddedSuccesfullyMessage("התלמיד נוסף בהצלחה");
    }
    
    const addStudent= () =>  {
      setAddStudentPopup(true)
      }
      const searchUser= () =>  { 
        setUserToAdd('null');
        console.log("user to add is: ", userToSearch)
        API.getUserByUsername(userToSearch) 
        //  .then(resp => console.log("user: ",resp.results))  
          .then(resp => setUserToAdd(resp.results))  
          .catch( error => console.log(error))  
        }
  
    return (   
    <div className="App">
      <h1>הדרכה</h1>
      {/* {options.push({key:'102',value:'Giraffe'})} */}
      {/* <p>{user.studentClasses && user.studentClasses[0].className}</p> */}
     {user.studentClasses && user.studentClasses.map(Studentclass => { 
                // return  
                  {options.push({key:Studentclass.id,value:Studentclass.className})}
                  
                  // {Studentclass.className}  
             
               
          })}
    


      
      {/* Current Value: <strong>{value}</strong> */}
    
    <Dropdown className='dropdown' options={options} value={defaultOption} label={defaultOption.key} onChange={handleChange}  placeholder="בחר כיתה" />
    <div className="profile">
      <div>
    <h3>תלמידים:</h3>
    {studentInClass.map(student => { 
                    return <p>
                      
                      <p className='username' onClick={() => viewProfile(student)}>
                      {student.username} </p> <br/>
                </p>                  
              })}
               <Button style={{display : selectedClass  ? "": "none"}} onClick={addStudent}>הוסף תלמיד</Button> 
</div>
<div>
<h3>מטצים:</h3>
    {teachersInClass.map(teacher => { 
                    return <p>
                      
                      <p className='username' onClick={() => viewProfile(teacher)}>
                      {teacher.username} </p> <br/>
                </p>                  
              })}
             
  </div>
  <div>
<h3>רכזים:</h3>
    {coordinatorsInClass.map(coordinator => { 
                    return <p>
                      
                      <p className='username' onClick={() => viewProfile(coordinator)}> 
                      {coordinator.username} </p> <br/>
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
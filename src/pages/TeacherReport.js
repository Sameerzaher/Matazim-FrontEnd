import 'react-dropdown/style.css';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service';
import '../index.css';
import '../Report.css';
import { Button } from 'react-bootstrap';
import { render, waitFor } from '@testing-library/react';

const TeachersScreen = () => {
  const[token] = useCookies(['mr-token']);
  const [teacher,setTeacher] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [studentInClass, setsStudentsInClass] = useState([]);
  const [matatzesInClass, setsMatatzesInClass] = useState([]);
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdUserFromURL = params.get('idUser');
  const [userCourses, setUserCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teacherClasses, setTeacherClasses] = useState([]);
  const [currentMatatz, setCurrentMatatz] = useState();
  const classList =[];
  const studentsList =[];
  const options=[];
  



function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}


        useEffect(() =>{
            console.log("dsfsbdmnfbmansdb")
            console.log("id user is: ", IdUserFromURL)
            API.getUserProfileById(IdUserFromURL)
                .then(resp => getTeacherClasses(resp))  
                .catch( error => console.log(error))

            
        }, [])

        useEffect(() =>{
          getAllMatatz()

          
      }, [studentInClass])

    const getTeacherClasses= (teacher) =>  {
           setTeacher(teacher)
           console.log("teacher 3 is:", teacher)
           teacher.teacherClasses && teacher.teacherClasses.map(teacherClass => { 
                                return <p>  
                                {classList.push(teacherClass.id)}            
                                {setTeacherClasses((teacherClasses) => [...teacherClasses, teacherClass])}                           
                            </p>                
                        }) 
            getAllTeachersStudents()
            getAllCourses()
    }


    const getAllMatatz= () =>  {
      // options.push({key:"1",value:"2"})
      console.log("studentInClass len: ",studentInClass.length )
      studentInClass && studentInClass.map(student =>{
        console.log("student is: ",student )
        API.getStudentsMatatz(student.id)
        .then(resp => options.push({key:student.id,value:resp.results.username}))
        // .then(resp=> setCurrentMatatz(resp.results.username))
        // sleep(10).then(()=>{
        // options.push({key:student.id,value:currentMatatz})
        // })
      } )
        sleep(10).then(()=>{
          console.log("options2 len: ",options.length )
        })
    }
    const getMatatz= (id) =>  {
    
    var test = "test1"

    console.log("rrrrrrrrrr")
    console.log("id is: ", id)
    console.log("options len: ",options.length )
        for (var i = 0; i < options.length; i++) {
          console.log(options[i].key, " ",id)
        if(options[i].key == id ){
          test = options[i].value
          break
        }}
return test
      }
    // API.getStudentsMatatz(id)
    // // .then(resp=> console.log("matatz is: ",resp.results.username))
    // .then(resp=> test=resp.results.username)
    // // .then(resp=> setCurrentMatatz(resp.results.username))
    // .catch( error => console.log(error))
    // // sleep(10).then(()=>{
    // return test
    // // })
    // }
    // API.getStudentsMatatz(id)
    // // .then(resp=> console.log("matatz is: ",resp.results.username))
    // .then(resp=> test=resp.results.username)
    // // .then(resp=> setCurrentMatatz(resp.results.username))
    // .catch( error => console.log(error))
    // // sleep(10).then(()=>{
    // return test
    // // 
    // }
    // sleep(10).then(()=>{
    //   options.push({key:id,value:currentMatatz})
    //   console.log("options are: ", options)
    //   })
    // .then(resp=> console.log("matatz is: ",resp.results.username))
    // .then(resp=> setCurrentMatatz(resp.results.username))
   
    const getDataOfClass= (numOfClass) =>  { 
      console.log("2- class is: ", numOfClass)
      API.getClassStudentsByID(numOfClass)
         .then(resp => setsStudentsInClass((studentInClass) => [...studentInClass.concat(resp.results)]))
        //  .then(getAllMatatz(studentInClass)) 
         .catch( error => console.log(error))


      // API.getClassMatatzesByID(numOfClass) 
      // .then(resp => setsMatatzesInClass((matatzesInClass) => [...matatzesInClass.concat(resp.results)])) 
      // .catch( error => console.log(error))
      // API.getStudentsMatatz(numOfClass) 
      // .then(resp => setsMatatzesInClass((matatzesInClass) => [...matatzesInClass.concat(resp.results)])) 
      // .catch( error => console.log(error))

      // sleep(100).then(()=>{
      //   studentInClass.map(student => {
      //   getMatatz(student.id)  
      //   // options.push({key:student.id,value:currentMatatz})
      //   })}) 
      // })
      sleep(100).then(()=>{
        console.log("options are: ", options)
        // getAllMatatz()
      })
      
      }


      const getAllTeachersStudents = () =>{
        sleep(100).then(()=>{
        console.log("list :", classList)
       
        classList.map(classId => {  
            console.log("time:",classId)
             getDataOfClass(classId)

        }) 
        sleep(100).then(()=>{  
        console.log("students are:  ", studentsList)
        })  
            })    

      }

    const getAllCourses = () =>{        
      API.getAllCourses() 
     
        .then(resp =>setCourses(resp))
        .catch( error => console.log(error))
    }

    
    return (   
    
   
    <div className="Report">
      <h4>שם מורה:</h4>
      <p>{teacher.firstName}</p>

      <table>
        <tr>
          <th>תלמיד</th>
          <th>כיתה</th>
          <th>מטצים</th>
          {courses.map(course => {
          return (
            // <tr>
          <th>{course.name}</th>      
        )
        
    })}
    </tr>
      
              {console.log("im here ")}
        {studentInClass.map(student => {
      var m = ''
          return <tr>
              {console.log("student: ", student)}
              {console.log("classList: ", classList)}
              {console.log("teacherClasses:  ", teacherClasses)}
              <td>{student.firstName+ " "+ student.lastName}</td>
              <td>{student.studentClasses[0].className}</td>
              {/* {console.log("len of options: ", options.length)}
              {options && options.map(option=>{
                console.log("options: ", option)
              })} */}
             
             {/* <td>{matatzesInClass.map(mataz => {
               return  mataz.matatzClasses.map(matazClass =>{  
                return <p>{matazClass.id==student.studentClasses[0].id ? mataz.firstName+ " "+ mataz.lastName: ""}</p> 
            })
             })}</td> */}
             {/* {() =>  getMatatz(student.id)} */}
             {/* {document.getElementById("test").click()} */}
             {/* {this.getMatatz(student.id)}   */}
             {/* <button id="test" style={{display :"none"}} onClick={() => getMatatz(student.id)}></button> */}
             {/* {   API.getStudentsMatatz(1).then(resp=> setCurrentMatatz(resp.results.username))} */}
            
             {/* {m= getMatatz(student.id)} */}
             {/* <td onClick ={() => getMatatz(student.id)}>aaa</td> */}
             {/* <td> {onClick =() => getMatatz(student.id)}</td> */}
               {/* <td>{currentMatatz}</td>   */}
               <td>{getMatatz(student.id)}</td> 

          {/* {options.map(student => {
      
          return <tr>
               {console.log("options: ", options)}
              {/* {console.log("classList: ", classList)}
              {console.log("teacherClasses: ", teacherClasses)}  */}
              {/* <td>{student.key.firstName+ " "+ student.key.lastName}</td>
              <td>{student.key.studentClasses[0].className}</td>


              <td>{student.value}</td>   */} 




        {/* go through all the courses in the list and check if the user has benn registerd to the course */}
        {courses.map(c => { 
            var foundCourse = false;
            return <td>
                {userCourses.map(course => {
                    if(course.course==c.id && course.user==student.user)
                    {
                        foundCourse = true;
                        return <td>{course.numOfLesson}</td>
                    }
                    // return <td>{course.user==student.user && course.course==c.id? course.numOfLesson:""}</td> 
                    //  return<td>{course.course==c.id && course.user==student.user? () =>setCourseFound(true)+course.numOfLesson :"" }</td>
                    //working -  return<td>{course.course==c.id && course.user==student.user? course.numOfLesson:"" }</td>

                })} 
              
              <td>{foundCourse?"":"לא רשומ/ה"}</td>
              {/* <td>{"אין"}</td> */}
              
              </td>
            {/* </tr> */}
            
})}


            </tr>
            })}

         {/* })}  */}
      </table>
    </div> 
);  
                  };
 

   
  
export default TeachersScreen;
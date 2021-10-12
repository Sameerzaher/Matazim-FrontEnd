import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import '../Courses.css';
import { API } from '../api-service';



const CoursesScreen = () => {
const [courses, setCourses] = useState([]);
const [lessons, setLessons] = useState([]);
const [lessonNumber, setLessonsNumber] = useState(['1']);
const [currentLesson, setCurrentLesson] = useState([]);
//the url from youtube for every lesson. changed when the user choose another lesson. the default is for the first lesson. 
const[url, setUrl ] = useState('https://youtu.be/i9-HWYsrh_k'); 

//const displayCourses = () =>  {
  useEffect(() =>{ 
  API.displayCourses()
      .then( resp => setCourses(resp))
      .catch( error => console.log(error)) 
  API.getLessons()
      .then( resp => setLessons(resp))
      .catch( error => console.log(error))
 
      
}, [])

const displayLessons = (lesson) =>{
  console.log("asdasd");
  console.log(lesson.numOfLesson);
  setUrl(lesson.link)
  console.log(lessonNumber)
  setLessonsNumber(lesson.numOfLesson)
  console.log(lessonNumber)
}
const playNextLesson= () =>  {
  console.log(lessonNumber)
  console.log(lessonNumber+2)
  API.getNextLesson(lessonNumber+2)
      .then( resp => setCurrentLesson(resp))
      .then(console.log(currentLesson))
      .catch( error => console.log(error)) 
  setUrl(currentLesson.link)
   
}


  return ( 


  
    <div className="App">
      <header className="Header">
      <h1>קורס פייתון - בסיס</h1>
      </header> 
      <div className="lessons">
      <div>
        {/* //working */}
      {/* {  courses.map( course => {
            return <button onClick={() => test(course)}>{course.name}</button>
          })}  */}
      {/* {  courses.map( course => {
            return <h2>{course.name}</h2>
          })}  */}
      {/* { courses.map(lesson => {
            return <h2>{lesson.lessons.map((name) => 
              <li >{name.name} </li>
              //<button onClick={displayLessons(name.name)}>{name.name} </button>
            )}</h2>
        })} */}
      </div>
      <div>
      {/* { courses.map( lesson => {
          lesson.lessons.map(nam =>{
            return <h2>{nam.name}</h2>
        })
          })} */}
        </div>
        <div>
          <ReactPlayer controls url={url} />
          <button onClick={playNextLesson}>שיעור הבא</button><br/>
        </div>
        <div>
          {/* display as buttons all the lessons of the selected course  */}
        { courses.map(lesson => {
            return <h2>{lesson.lessons.map((name) => 
              <button onClick={() => displayLessons(name)}>{name.name} </button> 
              //<button onClick={displayLessons(name.name)}>{name.name} </button>
            )}</h2>
        })}
           
           {/* <button onClick={() => setUrl('https://youtu.be/i9-HWYsrh_k')} >שיעור 1</button><br/>
           <button onClick={() => setUrl('https://youtu.be/OWuRhPUP31s')}>שיעור 2</button><br/>
           <button onClick={() => setUrl('https://youtu.be/Ew_JiqX1EO0')} >שיעור 3</button><br/>
           <button onClick={() => setUrl('https://youtu.be/6XI_0ORZsao')}>שיעור 4</button><br/>
           <button onClick={() => setUrl('https://youtu.be/iDu4PuKNXpc')} >שיעור 5</button><br/>
           <button onClick={() => setUrl('https://youtu.be/VIAgn7_zPvU')}>שיעור 6</button><br/>
           <button onClick={() => setUrl('https://youtu.be/yPdMrpmLZ1o')} >שיעור 7</button><br/>
           <button onClick={() => setUrl('https://youtu.be/2SYkSp8bHkQ')}>שיעור 8</button><br/>
           <button onClick={() => setUrl('https://youtu.be/djYyAngqOHA')} >שיעור 9</button><br/>
           <button onClick={() => setUrl('https://youtu.be/F6OD_OCSDrQ')}>שיעור 10</button><br/>
           <button onClick={() => setUrl('https://youtu.be/hsdPUQ94TFQ')} >שיעור 11</button><br/>
           <button onClick={() => setUrl('https://youtu.be/iIFS059A1oM')}>שיעור 12</button><br/>
           <button onClick={() => setUrl('https://youtu.be/HD2s_BTtVBo')} >שיעור 13</button><br/>
           <button onClick={() => setUrl('https://youtu.be/zACdpNyH3_M')}>שיעור 14</button><br/>
           <button onClick={() => setUrl('https://youtu.be/Xn9_B_oQcC4')} >שיעור 15</button><br/>
           <button onClick={() => setUrl('https://youtu.be/K2eQyBepFoQ')}>שיעור 16</button><br/>
           <button onClick={() => setUrl('https://youtu.be/GSQEc4BxrhE')}>שיעור 17</button><br/>
           <button onClick={() => setUrl('https://youtu.be/uzZFDPQ_jyI')} >שיעור 18</button><br/>
           <button onClick={() => setUrl('https://youtu.be/Q-vWAl6AdsE')}>שיעור 19</button><br/>
           <button onClick={() => setUrl('https://youtu.be/z5zA9wMjwmQ')} >שיעור 20</button><br/>
           <button onClick={() => setUrl('https://youtu.be/HfyV9IzyaJQ')}>שיעור 21</button><br/> */}
        </div>
        {/* <div>
          
          { courses.map( course => {
            return <h2>{course.name}</h2>
          })}
        </div> */}
          {/* course = this.props.data.map(function (co)){
          return(
          <div>
          <h2>{course.name}</h2>
          </div>
          );
      });
    } */}
    </div>
    </div>  

  );
};

export default CoursesScreen;

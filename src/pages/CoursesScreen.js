import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import '../Courses.css';
import { API } from '../api-service';
// import Alert from 'react-popup-alert'
// npm install --save react-popup-alert



const CoursesScreen = () => {
const search = window.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id');  
console.log("now"); 
console.log(IdFromURL); 
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
    // API.getCurrentCourse(IdFromURL)
    //   .then( resp => setCourses(resp))
    //   .catch( error => console.log(error))
  API.getLessons()
      .then( resp => setLessons(resp))
      .catch( error => console.log(error))
 
      
}, [])

const displayLessons = (lesson) =>{
  console.log("asdasd");
  console.log(lesson.numOfLesson);
  setUrl(lesson.link)
  console.log(lessonNumber)
  setLessonsNumber(lesson.id)
  setCurrentLesson(lesson)
  console.log(lessonNumber)
  
}
const playNextLesson= () =>  {
  // if (lessonNumber > 4){
  //   AlertDismissible();
  // }
  console.log(lessonNumber)
  console.log(lessonNumber+2)
  API.getNextLesson(lessonNumber+1)
      .then( resp => setCurrentLesson(resp))
      .then(console.log(currentLesson))
      .catch( error => console.log(error)) 
  setUrl(currentLesson.link)
  //setLessonsNumber(currentLesson.numOfLesson) 
  // setLessonsNumber(lessonNumber+1)
  setLessonsNumber(currentLesson.id)
}
const playPreviousLesson= () =>  {
  console.log(lessonNumber)
  API.getPreviousLesson(lessonNumber-1)
      .then( resp => setCurrentLesson(resp))
      .then(console.log(currentLesson))
      .catch( error => console.log(error)) 
  setUrl(currentLesson.link)
  setLessonsNumber(currentLesson.id)  
}


  return ( 


  
    <div className="App">
      <header className="Header">
      <h1>{courses.name}</h1>
     {/* {  coursesList.map( course => {
            return <h1>{course.name}</h1>
          })}  */}

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
      {/* { courses.map( lesson => {         &nbsp;&nbsp;&nbsp;
          lesson.lessons.map(nam =>{
            return <h2>{nam.name}</h2>
        })
          })} */}
        </div>
        <div>
          <ReactPlayer controls url={url} width='70%'
          height='220%'/><br/>
          {/* <div className="prevAndNext"> */}
            <button className="prevAndNext" onClick={playNextLesson} >השיעור הבא</button>
            <button className="prevAndNext" onClick={playPreviousLesson}>השיעור הקודם</button><br/>
          {/* </div> */}
        </div>
       
          {/* display as buttons all the lessons of the selected course  */}
        {/* { courses.map(lesson => {
            return <h2>{lesson.lessons.map((name) => 
             <ul class="lessonsList"> <li onClick={() => displayLessons(name)}>{name.name} </li> </ul>
              //<button onClick={displayLessons(name.name)}>{name.name} </button>
            )}</h2>
        })} */}
 <div>
           {/* display the lessons for the chosen course - working!*/}
           {/* { courses.map(lesson => {
            return <h2>{lesson.lessons.map((name) => 
             <ul class={name.numOfLesson == currentLesson.numOfLesson ? "currentList": "lessonsList"}> <li onClick={() => displayLessons(name)}>{name.name} </li> </ul>
              //<button onClick={displayLessons(name.name)}>{name.name} </button>
            )}</h2>
        })} */}
            {/* second try */}
          { courses.map(lesson => { 
             if(lesson.id == IdFromURL) 
                return <h2>{lesson.lessons.map((name) => 
                <ul class={name.numOfLesson == currentLesson.numOfLesson ? "currentList": "lessonsList"}> <li onClick={() => displayLessons(name)}>{name.name} </li> </ul>
         
            )}</h2>
          })}
</div>        


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

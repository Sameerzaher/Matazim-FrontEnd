import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import '../Courses.css';
import { API } from '../api-service';
// import ReactDom from 'react-dom';
//import Popup from 'react-popup';
import Popup from '../components/Popup';





const CoursesScreen = () => {
const search = window.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id');  
console.log("now"); 
console.log(IdFromURL); 
const [courses, setCourses] = useState([]);
const [selectedCourse, setsSelectedCourse] = useState([]);
const [lessons, setLessons] = useState([]);
const [lessonNumber, setLessonsNumber] = useState([0]);
const [currentLesson, setCurrentLesson] = useState([]);
//the url from youtube for every lesson. changed when the user choose another lesson. the default is for the first lesson. 
const[url, setUrl ] = useState('https://youtu.be/i9-HWYsrh_k'); 
const[buttonPopup, setButtonPopup ] = useState(false); 
const lessonsList =[];
var numOfLessons = 0;
// const [lessonNum, setLessonNum] = useState([0]);




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
////////////////////////////////try
// useEffect(() =>{ 
//   console.log("lessonNumberrrrr")
//   console.log(lessonNumber)
//    API.getNextLesson(lessonNumber)
//     .then( resp => setCurrentLesson(resp))
//     //.then(console.log(currentLesson))
//     .catch( error => console.log(error)) 
//    // console.log(currentLesson)
// setUrl(currentLesson.link)
// //setLessonsNumber(currentLesson.numOfLesson) 
// // setLessonsNumber(lessonNumber+1)
// setLessonsNumber(currentLesson.id);
//  // console.log(lessonNumber)
// }, [lessonNumber])
///////////////////////////////end try


const displayLessons = (lesson) =>{
  //console.log("asdasd");
 // console.log(lesson.numOfLesson);
  setUrl(lesson.link)
  console.log("lesson number is: ", lessonNumber)
  console.log("lesson id is: ",lesson.id)
  setLessonsNumber(lesson.id-1)
  setCurrentLesson(lesson)
  console.log("after: lesson number is: ", lessonNumber)
  //console.log(currentLesson)
 // console.log(currentLesson.assignment)
}
// const playNextLesson= () =>  {
  
//   if (currentLesson.assignment != "null"){
//     console.log(currentLesson.assignment);
//     setButtonPopup(true);
//   }
//   else{
//     console.log("there is no assignment");
//     console.log(currentLesson.assignment);
  
//   console.log(lessonNumber)
//   console.log(lessonNumber+1)
//   setLessonsNumber(lessonNumber+1 ,() => {console.log(lessonNumber);});
//  // console.log(lessonNumber)
//   API.getNextLesson(lessonNumber+1)
//       .then( resp => setCurrentLesson(resp))
//       .then(console.log(currentLesson))
//       .catch( error => console.log(error)) 
//       console.log(currentLesson)
//   setUrl(currentLesson.link)
//   //setLessonsNumber(currentLesson.numOfLesson) 
//   // setLessonsNumber(lessonNumber+1)
//   setLessonsNumber(currentLesson.id)
// }}



const playNextLesson= () =>  {
  console.log("in next lesoon fun. next lesson number is: ", lessonNumber+1);
  console.log("lesson number is: ", lessonNumber);
  console.log(lessonsList)
//   var len = 2;
//  lessonsList.map(id => {return len=len+1} )

  console.log("lesson list.length is:", lessonsList[0].length);
 {lessonsList[0]  ?  lessonNumber ===  lessonsList[0].length  ?console.log("1") :console.log("2") :console.log("3") }
  //if there is ann assignmnent for these lesson - display it on a popup message. if there is no assignment - proceed to next lesson
    // if (currentLesson.assignment != "null"){
    // {lessonsList.map(lesson =>{
      // var first = lessonsList[0].name;
      // console.log(first);
      // console.log("first");
    if(lessonsList[0][lessonNumber-1].assignment !="null"){
        console.log(currentLesson.assignment);
        setButtonPopup(true);
  }
  else{
    {lessonsList.map(lesson => {
      {console.log("inside next lesson")}
      {console.log(lesson[lessonNumber])}
      return setUrl(lesson[lessonNumber].link), setCurrentLesson(lesson[lessonNumber])
      
      // console.log(lesson[4].link);
    })}
    setLessonsNumber(lessonNumber+1)
    
  // console.log(lessonsList[3]);
 // console.log(lessonsList[4].url);
  //setLessonsNumber(lessonNumber+1)
  
  }
}



const playPreviousLesson= () =>  {
  console.log("in previous. next lesson number is:", lessonNumber-1);
  console.log("lesson number is: ", lessonNumber);
  {lessonsList.map(lesson => {
    return setUrl(lesson[lessonNumber-2].link), setCurrentLesson(lesson[lessonNumber-2])
    // console.log(lesson[4].link);
  })}
  setLessonsNumber(lessonNumber-1)
  
  // console.log(lessonNumber)
  // API.getPreviousLesson(lessonNumber-1)
  //     .then( resp => setCurrentLesson(resp))
  //     .then(console.log(currentLesson))
  //     .catch( error => console.log(error)) 
  // setUrl(currentLesson.link)
  // setLessonsNumber(currentLesson.id)  
}
//proceed to the next lesson of the course after the popup message
const proceedToNextLesson= () =>  {
  console.log(" inside fun proceed");
  {lessonsList.map(lesson => {
    return setUrl(lesson[lessonNumber].link), setCurrentLesson(lesson[lessonNumber])
  })}
  setLessonsNumber(lessonNumber+1)
  setButtonPopup(false)
  
// console.log("lessonNumber+2")
// API.getNextLesson(lessonNumber+1)
//     .then( resp => setCurrentLesson(resp))
//     .then(console.log(currentLesson))
//     .catch( error => console.log(error)) 
//     console.log("the current lesson is:")
//     console.log(currentLesson.name)
// setUrl(currentLesson.link)
// setLessonsNumber(currentLesson.id)
// 
}


  return ( 


  
    <div className="App">
      <header className="Header">
      
     
      {/* <h1>{currentLesson.assignment}</h1> */}
        {/* {courses.map(lesson => {
             if(lesson.id == IdFromURL) 
                 return <h2>{lesson.name}}</h2>} */}


                 { courses.map(lesson => { 
                  if(lesson.id == IdFromURL) 
                     return <h1>{lesson.name}</h1>
                     
              
            
               })}


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
           {/*  display the lessons for the chosen course - working*/ }
          { courses.map(lesson => { 
             if(lesson.id == IdFromURL){
                numOfLessons=lesson.lessons.length;
                {console.log("num of lesson is: ",numOfLessons )}
                {lessonsList.push(lesson.lessons)}
                // {setsSelectedCourse(lesson)}
                return <h2>{lesson.lessons.map((name) => 
                <ul class={name.numOfLesson == currentLesson.numOfLesson ? "currentList": "lessonsList"}> <li onClick={() => displayLessons(name)}>{name.name} </li> </ul>
                )}</h2> 
                } 
          })}
         
</div>

        <div>
          <ReactPlayer trigger={url} controls url={url} width='70%'
          height='220%'/><br/>
          {console.log("lessonsList")}
          {console.log(lessonsList)}
          {/* {numOfLessons = lessonsList.length > 0 ? lessonsList[0].length: '0'} */}
          {/* <div className="prevAndNext"> */}
            {/* <button className="prevAndNext" onClick={playNextLesson} >השיעור הבא</button> */}
            {/*lessonsList[0] &&    lessonsList[0].length*/}
           
              
           
            {/* <button className="prevAndNext" style={{display : lessonNumber ===  lessonsList[0].length  ? "": "none"}}  onClick={playNextLesson} >השיעור הבא</button>  */}
            <button className="prevAndNext" style={{display : lessonNumber ===  numOfLessons  ? "none": ""}}  onClick={playNextLesson} >השיעור הבא</button> 
            {/* <button className="prevAndNext" style={{display : lessonsList[0]!=null  &&  lessonNumber ===  lessonsList[0].length  ? "none": ""}}  onClick={playNextLesson} >השיעור הבא</button>  */}
            <button className="prevAndNext" style={{display : lessonNumber ===  0  ? "none": ""}} onClick={playPreviousLesson}>השיעור הקודם</button><br/>
     
        </div>

          {/* display as buttons all the lessons of the selected course  */}
        {/* { courses.map(lesson => {
            return <h2>{lesson.lessons.map((name) => 
             <ul class="lessonsList"> <li onClick={() => displayLessons(name)}>{name.name} </li> </ul>
              //<button onClick={displayLessons(name.name)}>{name.name} </button>
            )}</h2>
        })} */}
        


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
    
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      
      <h3>לפני שעוברים לשיעור הבא יש לבצע מטלה</h3>
          {console.log("popup message")}
          {console.log(currentLesson.assignment)}
          <p>{currentLesson.assignment}</p>
          <button onClick={proceedToNextLesson}>שמור והמשך לשיעור הבא</button>
           
    </Popup>
    </div>  

  );
};

export default CoursesScreen;

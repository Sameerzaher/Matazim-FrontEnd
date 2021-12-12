import { API } from '../api-service';
import React, {useEffect, useState} from 'react';
import '../CoursesMain.css';

const CoursesMainScreen = () => {
    const [coursesList, setCourses] = useState([]);

    //get all the courses in the database
    useEffect(() =>{ 
        API.displayCourses()
            .then( resp => setCourses(resp))
            .catch( error => console.log(error))      
      }, [])

      const goToCourse= (course) =>  {
            console.log("in go to course")
            console.log(course.name)
            console.log(course.lessons[0].link)
            //  window.location.href =`/CoursesScreen?id=${course.id}`;
            // <Link
            //     to={
            //         pathname: "/CoursesScreen",
            //         state: course // your data array of objects
            //     }
            // >
             //window.location.href = `/CoursesScreen(course)
            window.location.href ='/CoursesScreen?id=' + course.id + "&link=" + course.lessons[0].link + "&firstLessonId=" + course.lessons[0].id ; 
            // window.open("{{ url('/CoursesScreen?id=')}}");
      }
return ( 

   <div className="App">
      <header className="Header">
      <h1>רשימת קורסים</h1>
      </header>
      <br/> 
      <p> ברוכים הבאים לאתר הלמידה 
          כאן תמצאו קורסים שיעזרו לכם ללמוד תכנים טכנולוגיים מעשיים. 
          .הרשמו ולימדו.  </p>
          <p>הקורסים מסודרים בצורה שתאפשר לכם להתקדם בקצב שלכם ולסמן כל שיעור שעברתם. 
          .לחלקם יש מטלות לביצוע לפני שעוברים לשיעור הבא.
          </p>
          <p>המערכת מבוססת על אמון, כלומר אם סימנתם שהקשבתם לשיעור אז אנחנו מאמינים לכם 
          .בהצלחה. תהנו ותתנו משוב
          </p>   
      <br/> 
      <div>
        {/* {  courses.map( course => {
                return <ul class="tilesWrap">
                <li onClick={() => goToCourse(course)}>{course.name}</li>
                <p >{course.description}</p>
                </ul> 
            })} */}
                {  coursesList.map( course => {
                return <ul class="tilesWrap">
                    <li>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    <button onClick={() => goToCourse(course)} >מעבר לקורס</button>
                    </li>
                </ul> 
            })}
    </div>
</div>
  );
};

export default CoursesMainScreen;
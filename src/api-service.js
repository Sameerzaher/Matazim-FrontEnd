import React from "react"
const BASE_URL = 'https://yarintz.pythonanywhere.com';
const LOCAL_URL = 'http://127.0.0.1:8000';
export class API extends React.Component{
/*
static DisplayUser(body){ 
        console.log(body)
        return fetch(`${LOCAL_URL}/main/users/21/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
        }
       */
       /*
static DisplayUserInfo(token, id, data){
    return fetch(`${LOCAL_URL}/main/users/${id}/`),{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify( data )
    }).then( resp => resp.json())  
}*/
// static getUserDetails(id){

//     return fetch(`${LOCAL_URL}/main/users/${id}`,{
//         method: 'GET',
//         headers: {  
//             'Content-Type':'application/json',
           
//         }
//     }).then( resp => resp.json())
//     //.then( res => props.UpdateUser(res))
//     //.catch( error => console.log(error))
// } 
static getUserDetails(token){

    return fetch(`${BASE_URL}/main/userProfile/1/getUserDetails/`,{
        method: 'POST',
        headers: {  
            'Content-Type':'application/json',
            'Authorization': `Token ${token}` 
        }
    })
    //.then(resp => console.log(resp))
     .then( resp => resp.json())
    //.then( res => props.UpdateUser(res))
    //.catch( error => console.log(error))
} 

static getUserDetails(token){

    return fetch(`${BASE_URL}/main/userProfile/1/getUserDetails/`,{
        method: 'POST',
        headers: {  
            'Content-Type':'application/json',
            'Authorization': `Token ${token}` 
        }
    })
    //.then(resp => console.log(resp))
     .then( resp => resp.json())
    //.then( res => props.UpdateUser(res))
    //.catch( error => console.log(error))
} 
static getUserDetails(token){

    return fetch(`${LOCAL_URL}/main/userProfile/1/getUserDetails/`,{
        method: 'POST',
        headers: {  
            'Content-Type':'application/json',
            'Authorization': `Token ${token}` 
        }
    })
    //.then(resp => console.log(resp))
     .then( resp => resp.json())
    //.then( res => props.UpdateUser(res))
    //.catch( error => console.log(error))
}
static UpdateUserDetails(token){

    return fetch(`${LOCAL_URL}/main/userProfile/1/UpdateUserDetails/`,{
        method: 'POST',
        headers: {  
            'Content-Type':'application/json',
            'Authorization': `Token ${token}` 
        }
    })
    //.then(resp => console.log(resp))
     .then( resp => resp.json())
    //.then( res => props.UpdateUser(res))
    //.catch( error => console.log(error))
}  
static loginUser(body){ 
    return fetch(`${BASE_URL}/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
        }).then( resp => resp.json())
    }
static registerUser(body){ 
    console.log(body)
        return fetch(`${BASE_URL}/main/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
            }).then( resp => resp.json())
        }
        static displayCourses(){ 
                console.log("inside displayCourses fun")
                return fetch(`${BASE_URL}/main/courses/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                     },
                    //body: JSON.stringify( body )
                }).then( resp => resp.json())
                // .then( resp => console.log(resp))
                }           
        static getLessons(){ 
                console.log("inside getLessons fun")
                // return fetch(`http://127.0.0.1:8000/main/courses/1/`, {
                return fetch(`${BASE_URL}/admin/main/course/1/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                    //body: JSON.stringify( body )
                })
                .then( resp => resp.json())
                // .then( resp => console.log(resp))
                
                      
                }  
                static getNextLesson(num){ 
                    console.log("inside getNextLesson fun")
                    return fetch(`${BASE_URL}/main/lessons/${num}/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                            },
                        //body: JSON.stringify( body )
                    })
                    .then( resp => resp.json())
                    // .then( resp => console.log(resp)) 
                }
                static getPreviousLesson(num){ 
                    console.log("inside getPreviousLesson fun")
                    console.log(num)
                    return fetch(`${BASE_URL}/main/lessons/${num}/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                            },                       
                    })
                    .then( resp => resp.json())
                }

                static getCurrentCourse(numOfCourse){ 
                    console.log("inside displayCourses fun")
                    return fetch(`${BASE_URL}/main/courses/${numOfCourse}/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                         },
                        //body: JSON.stringify( body )
                    }).then( resp => resp.json())
                    // .then( resp => console.log(resp))
                    }   
               
                    static loginUser(body){ 
                        return fetch(`${LOCAL_URL}/auth/`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify( body )
                        }).then( resp => resp.json())
                        }


                        static registerUser(body){ 
                            console.log(body)
                            return fetch(`${LOCAL_URL}/main/users/`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify( body )
                            }).then( resp => resp.json())
                            }
                        static displayCourses(){ 
                                console.log("inside displayCourses fun")
                                return fetch(`${LOCAL_URL}/main/courses/`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                     },
                                    //body: JSON.stringify( body )
                                }).then( resp => resp.json())
                                // .then( resp => console.log(resp))
                                }           
                        static getLessons(){ 
                                console.log("inside getLessons fun")
                                // return fetch(`http://127.0.0.1:8000/main/courses/1/`, {
                                return fetch(`${LOCAL_URL}/admin/main/course/1/`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                        },
                                    //body: JSON.stringify( body )
                                })
                                .then( resp => resp.json())
                                // .then( resp => console.log(resp))
                                
                                      
                                }  
                                static getNextLesson(num){ 
                                    console.log("inside getNextLesson fun")
                                    return fetch(`${LOCAL_URL}/main/lessons/${num}/`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                            },
                                        //body: JSON.stringify( body )
                                    })
                                    .then( resp => resp.json())
                                    // .then( resp => console.log(resp)) 
                                }
                                static getPreviousLesson(num){ 
                                    console.log("inside getPreviousLesson fun")
                                    console.log(num)
                                    return fetch(`${LOCAL_URL}/main/lessons/${num}/`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                            },                       
                                    })
                                    .then( resp => resp.json())
                                }
                
                                static getCurrentCourse(numOfCourse){ 
                                    console.log("inside displayCourses fun")
                                    return fetch(`${LOCAL_URL}/main/courses/${numOfCourse}/`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                         },
                                        //body: JSON.stringify( body )
                                    }).then( resp => resp.json())
                                    // .then( resp => console.log(resp))
                                    }
                                static getUserLessons(){ 
                                        console.log("inside getUserLessons fun")                           
                                        return fetch(`${LOCAL_URL}/main/userLessons/`, {
                                            method: 'GET',
                                            headers: {
                                                'Content-Type': 'application/json'
                                                },
                                            //body: JSON.stringify( body )
                                        }).then( resp => resp.json())
                                        //.then( resp => console.log(resp))
                                        
                                              
                                        }  
                static getUserNotes(token, data){ 
                    console.log("im in getUserNotes")
                  //  http://127.0.0.1:8000/main/userLessons/1/getUserLessons/                             
                    return fetch(`${LOCAL_URL}/main/userLessons/1/getUserLessons/`, {
                        method: 'POST',
                        headers: {
                        //   'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': `Token ${token}` 
                             },
                             body: JSON.stringify({'lesson' : data})  
                            // body: JSON.stringify({data})  
                            // params: {
                            //     'lesson': '4'
                            //   }                 
                        })
                          .then( resp => resp.json())
                        //.then( resp => console.log("eewrwerrewreerwewfaj"))
                       }  
                       static updateUserNotes(token, data, numOfLesson){ 
                        console.log("im in getUserNotes")
                      //  http://127.0.0.1:8000/main/userLessons/1/getUserLessons/                             
                         return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
                            method: 'POST',
                            headers: {
                            
                              'Content-Type': 'application/json',
                              'Authorization': `Token ${token}` 
                                 },
                                 body: JSON.stringify({'notes' : data})  
                                    
                            })
                              .then( resp => resp.json())
                            //.then( resp => console.log("eewrwerrewreerwewfaj"))
                           }  

                           static getUserAnswer(token, data){ 
                            console.log("im in getUserAnswer")                         
                            return fetch(`${LOCAL_URL}/main/userLessons/1/getUserLessons/`, {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Authorization': `Token ${token}` 
                                     },
                                     body: JSON.stringify({'lesson' : data})  
              
                                })
                                  //.then( resp => console.log(resp))
                                  .then( resp => resp.json())
                            
                               }  
                               static updateUserAnswer(token, data, numOfLesson){                             
                                return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
                                    method: 'POST',
                                    headers: {
                                    
                                      'Content-Type': 'application/json',
                                      'Authorization': `Token ${token}` 
                                         },
                                         body: JSON.stringify({'answer' : data})  
                                            
                                    })
                                      .then( resp => resp.json())
                                   }
                                   
                                   static getUserLastLesson(token, numOfCourse){                                                       
                                    return fetch(`${LOCAL_URL}/main/userCourses/${numOfCourse}/getUserCourses/`, {
                                        method: 'POST',
                                        headers: {
                                          'Content-Type': 'application/json',
                                          'Authorization': `Token ${token}` 
                                             },
                                            //  body: JSON.stringify({'course' : data})  
                      
                                        })
                                          //.then( resp => console.log(resp))
                                          .then( resp => resp.json())
                                    
                                       } 
                                       
                                       static updateUserCourse(token, data, numOfCourse){                             
                                        return fetch(`${LOCAL_URL}/main/userCourses/${numOfCourse}/addUserCourses/`, {
                                            method: 'POST',
                                            headers: {
                                            
                                              'Content-Type': 'application/json',
                                              'Authorization': `Token ${token}` 
                                                 },
                                                 body: JSON.stringify({'lesson' : data})  
                                                    
                                            })
                                              .then( resp => resp.json())
                                           }
    }
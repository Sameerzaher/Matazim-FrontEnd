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

//samir
// static UpdateUserDetails(token){

//     return fetch(`${LOCAL_URL}/main/userProfile/1/UpdateUserDetails/`,{
//         method: 'POST',
//         headers: {  
//             'Content-Type':'application/json',
//             'Authorization': `Token ${token}` 
//         }
//     })
//     //.then(resp => console.log(resp))
//      .then( resp => resp.json())
//     //.then( res => props.UpdateUser(res))
//     //.catch( error => console.log(error))
// }  
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
        // static registerUserProfile(username){ 
        //     return fetch(`${LOCAL_URL}/main/userProfile/1/createUserProfile/`, {
        //         method: 'POST',
        //         headers: {
                
        //           'Content-Type': 'application/json',
        //           //'Authorization': `Token ${token}` 
        //              },
        //              body: JSON.stringify({'username' : username})  
                        
        //         })
        //           .then( resp => resp.json())
                
        //        } 
        static registerUserProfile(username, firstName, lastName){ 
            return fetch(`${LOCAL_URL}/main/userProfile/1/createUserProfile/`, {
                method: 'POST',
                headers: {
                
                  'Content-Type': 'application/json',
                  //'Authorization': `Token ${token}` 
                     },
                     body: JSON.stringify({'username' : username, 'firstName' : firstName,'lastName' : lastName} )  
                        
                })
                  .then( resp => resp.json())
                
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
                                static getCourses(num){ 
                                    return fetch(`${BASE_URL}/main/courses/${num}`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                         },
                                    }).then( resp => resp.json())
                                    }  

                                    static getCourses(num){ 
                                        return fetch(`${LOCAL_URL}/main/courses/${num}`, {
                                            method: 'GET',
                                            headers: {
                                                'Content-Type': 'application/json'
                                             },
                                        }).then( resp => resp.json())
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
                       static getUserAnswersById(userId, lessonID){                     
                        return fetch(`${LOCAL_URL}/main/userLessons/1/getUserAnswers/`, {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                                 },
                                 body: JSON.stringify({'userId' : userId, 'lessonId' : lessonID})  
                     
                            })
                              .then( resp => resp.json())
                     
                           }
                       static updateUserNotes(token, data, numOfLesson){ 
                         return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
                            method: 'POST',
                            headers: {
                            
                              'Content-Type': 'application/json',
                              'Authorization': `Token ${token}` 
                                 },
                                 body: JSON.stringify({'notes' : data})  
                                    
                            })
                              .then( resp => resp.json())
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
                               static updateUserAnswer(token, answer,link, image, numOfLesson){                             
                                return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
                                    method: 'POST',
                                    headers: {
                                    
                                      'Content-Type': 'application/json',
                                      'Authorization': `Token ${token}` 
                                         },
                                         body: JSON.stringify({'answer' : answer, 'link' : link, 'image' : image})  
                                            
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
                                       static getAllUserCourses(token){                                                        
                                        return fetch(`${LOCAL_URL}/main/userCourses/1/getAllUserCourses/`, {
                                            method: 'GET',
                                            headers: {
                                              'Content-Type': 'application/json',
                                              'Authorization': `Token ${token}` 
                                                 },                         
                                            })                                    
                                              .then( resp => resp.json())                                       
                                           }
                                        //    static getAllUserCourses(token){                                                       
                                        //     return fetch(`${BASE_URL}/main/userCourses/1/getAllUserCourses/`, {
                                        //         method: 'GET',
                                        //         headers: {
                                        //           'Content-Type': 'application/json',
                                        //           'Authorization': `Token ${token}` 
                                        //              },                         
                                        //         })                                    
                                        //           .then( resp => resp.json())                                       
                                        //        }  
                                               static getAllCoursesByUserId(id){  
                                                console.log("id is: " ,id)                                                     
                                                return fetch(`${LOCAL_URL}/main/userCourses/${id}/getAllCoursesByUserId/`, {
                                                    method: 'GET',
                                                    headers: {
                                                      'Content-Type': 'application/json',                                                     
                                                         },                         
                                                    }).then( resp => resp.json())
                                                     //.then( resp => console.log("in API ", resp))                                       
                                                   }
                                                //    static getAllCoursesByUserId(id){ 
                                                //     console.log("im here in base")                                                      
                                                //     return fetch(`${BASE_URL}/main/userCourses/${id}/getAllCoursesByUserId/`, {
                                                //         method: 'GET',
                                                //         headers: {
                                                //           'Content-Type': 'application/json',                                                       
                                                //              },                         
                                                //         })                                    
                                                //           .then( resp => resp.json())                                       
                                                //        }  
                                       
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
                                           static getClassStudentsByID(classId){                                                                                  
                                                return fetch(`${LOCAL_URL}/main/class/${classId}/getClassStudents/`, {
                                                     method: 'POST',
                                                     headers: {
                                                        'Content-Type': 'application/json'
                                                     },                                           
                                              })
                                             .then( resp => resp.json())                                                                                                                               
                                             }  
                                             static getClassTeacherssByID(classId){                                                                                  
                                                return fetch(`${LOCAL_URL}/main/class/${classId}/getClassTeachers/`, {
                                                     method: 'POST',
                                                     headers: {
                                                        'Content-Type': 'application/json'
                                                     },                                           
                                              })
                                             .then( resp => resp.json())                                                                                                                               
                                             }  
                                             static getClassCoordinatorsByID(classId){                                                                                  
                                                return fetch(`${LOCAL_URL}/main/class/${classId}/getClassCoordinators/`, {
                                                     method: 'POST',
                                                     headers: {
                                                        'Content-Type': 'application/json'
                                                     },                                           
                                              })
                                             .then( resp => resp.json())                                                                                                                               
                                             }  
                                             static getUserProfileById(id){                                     
                                                return fetch(`${LOCAL_URL}/main/userProfile/${id}/`, {
                                                    method: 'GET',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                        },                       
                                                })
                                                .then( resp => resp.json())
                                            }
                                            static getUserByUsername(username){  
                                                console.log("im here");                                                                                
                                                return fetch(`${LOCAL_URL}/main/userProfile/1/getUserByUsername/`, {
                                                     method: 'POST',
                                                     headers: {
                                                        'Content-Type': 'application/json'
                                                     }, 
                                                     body: JSON.stringify({'username' : username})
                                                                                    
                                              })
                                              .then( resp => resp.json())  
                                            //   .then( resp => resp.json()) 
                                            }
                                            static addStudentToClass(classId, username){                             
                                                return fetch(`${LOCAL_URL}/main/class/${classId}/addUserToClass/`, {
                                                    method: 'POST',
                                                    headers: {
                                                    
                                                      'Content-Type': 'application/json',
                                                    //   'Authorization': `Token ${token}` 
                                                         },
                                                         body: JSON.stringify({'student' : username})  
                                                            
                                                    })
                                                      .then( resp => resp.json())
                                                   }

                                                   static removeStudentFromClass(classId, username){ 
                                                    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");                            
                                                    return fetch(`${LOCAL_URL}/main/class/${classId}/removeUserFromClass/`, {
                                                        method: 'POST',
                                                        headers: {
                                                        
                                                          'Content-Type': 'application/json',
                                                        //   'Authorization': `Token ${token}` 
                                                             },
                                                             body: JSON.stringify({'student' : username})  
                                                                
                                                        })
                                                          .then( resp => resp.json())
                                                       }


                                                       static updateUserDetails(token, firstName, lastName, aboutMe, hobbies, myGoal ){ 
                                                        return fetch(`${LOCAL_URL}/main/userProfile/1/UpdateUserDetails/`, {
                                                           method: 'POST',
                                                           headers: {
                                                           
                                                             'Content-Type': 'application/json',
                                                             'Authorization': `Token ${token}` 
                                                                },
                                                                body: JSON.stringify({'firstName' : firstName, 'lastName' : lastName,'aboutMe' : aboutMe,
                                                                'hobbies' : hobbies,'myGoal' : myGoal,
                                                            })  
                                                                   
                                                           })
                                                             .then( resp => resp.json())
                                                          }  
                                                    //    static removeStudentFromClass(classId, username){                             
                                                    //     return fetch(`${BASE}/main/class/${classId}/removeUserFromClass/`, {
                                                    //         method: 'POST',
                                                    //         headers: {
                                                            
                                                    //           'Content-Type': 'application/json',
                                                    //         //   'Authorization': `Token ${token}` 
                                                    //              },
                                                    //              body: JSON.stringify({'student' : username})  
                                                                    
                                                    //         })
                                                    //           .then( resp => resp.json())
                                                    //        }
    }
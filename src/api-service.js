import React from "react"
const BASE_URL = 'https://yarintz.pythonanywhere.com';
const LOCAL_URL = 'http://127.0.0.1:8000';
export class API extends React.Component{
/*static DisplayUser(body){ 
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

static UpdateUser(token, id, data){ 
    return fetch(`${BASE_URL}/main/users/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify( data )
    }).then( resp => resp.json())
    }
static UpdateUser(token, id, data){ 
        return fetch(`${LOCAL_URL}/main/users/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( data )
        }).then( resp => resp.json())
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
    }

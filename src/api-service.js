export class API {
    static loginUser(body){ 
        return fetch(`https://yarintz.pythonanywhere.com/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
        }

        static registerUser(body){ 
            console.log(body)
            return fetch(`https://yarintz.pythonanywhere.com/main/users/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( body )
            }).then( resp => resp.json())
            }
        static displayCourses(){ 
                console.log("inside displayCourses fun")
                return fetch(`https://yarintz.pythonanywhere.com/main/courses/`, {
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
                return fetch(`https://yarintz.pythonanywhere.com/admin/main/course/1/`, {
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
                    return fetch(`https://yarintz.pythonanywhere.com/main/lessons/${num}/`, {
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
                    return fetch(`https://yarintz.pythonanywhere.com/main/lessons/${num}/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                            },                       
                    })
                    .then( resp => resp.json())
                }

                static getCurrentCourse(numOfCourse){ 
                    console.log("inside displayCourses fun")
                    return fetch(`https://yarintz.pythonanywhere.com/main/courses/${numOfCourse}/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                         },
                        //body: JSON.stringify( body )
                    }).then( resp => resp.json())
                    // .then( resp => console.log(resp))
                    }     
                    static loginUser(body){ 
                        return fetch(`http://127.0.0.1:8000/auth/`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify( body )
                        }).then( resp => resp.json())
                        }
                
                        static registerUser(body){ 
                            console.log(body)
                            return fetch(`http://127.0.0.1:8000/main/users/`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify( body )
                            }).then( resp => resp.json())
                            }
                        static displayCourses(){ 
                                console.log("inside displayCourses fun")
                                return fetch(`http://127.0.0.1:8000/main/courses/`, {
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
                                return fetch(`http://127.0.0.1:8000/admin/main/course/1/`, {
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
                                    return fetch(`http://127.0.0.1:8000/main/lessons/${num}/`, {
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
                                    return fetch(`http://127.0.0.1:8000/main/lessons/${num}/`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                            },                       
                                    })
                                    .then( resp => resp.json())
                                }
                
                                static getCurrentCourse(numOfCourse){ 
                                    console.log("inside displayCourses fun")
                                    return fetch(`http://127.0.0.1:8000/main/courses/${numOfCourse}/`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                         },
                                        //body: JSON.stringify( body )
                                    }).then( resp => resp.json())
                                    // .then( resp => console.log(resp))
                                    }
    }

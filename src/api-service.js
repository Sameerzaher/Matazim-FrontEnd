export class API {
    static loginUser(body){ 
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
        }
        static loginUser(body){ 
            return fetch(`http://yarintz.pythonanywhere.com/auth/`, {
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
        static registerUser(body){ 
                console.log(body)
                return fetch(`http://yarintz.pythonanywhere.com/main/users/`, {
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
        static displayCourses(){ 
                    console.log("inside displayCourses fun")
                    return fetch(`http://yarintz.pythonanywhere.com/main/courses/`, {
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
                return fetch(`http://127.0.0.1:8000/main/courses/1/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                    //body: JSON.stringify( body )
                })
                .then( resp => resp.json())
                // .then( resp => console.log(resp))
                
                      
                }  
                static getLessons(){ 
                    console.log("inside getLessons fun")
                    return fetch(`http://yarintz.pythonanywhere.com/main/courses/1/`, {
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
                     //.then( resp => console.log(resp)) 
                }
                static getNextLesson(num){ 
                    console.log("inside getNextLesson fun")
                    return fetch(`http://yarintz.pythonanywhere.com/main/lessons/${num}/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                            },
                        //body: JSON.stringify( body )
                    })
                    .then( resp => resp.json())
                     //.then( resp => console.log(resp)) 
                }
        
    }

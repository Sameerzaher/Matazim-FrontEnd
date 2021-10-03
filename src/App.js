import './App.css';
import React, {useEffect} from 'react';
import Navbar from "./components/Navbar";
import HomepageScreen from './pages/HomepageScreen';
import CoursesScreen from './pages/CoursesScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import Signin from './pages/Signin'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';
//import SignUp from './pages/signup';



function App() {
  const [token, setToken, deleteToken] = useCookies(['mr-token']);

  
  
  useEffect ( () => {
    if(!token['mr-token']) console.log("no token");
    else console.log(token);
    //window.location.href = '/'
  }, [token])

  const logoutUser = () => {
    console.log("inside logoutUser");
    deleteToken(['mr-token']);
  }
  return (
    <Router>
     <button onClick={logoutUser}> התנתק!</button>
      <Navbar />
      <Switch>
        <Route path="/HomepageScreen" exact component={HomepageScreen} />
        <Route path="/CoursesScreen" component={CoursesScreen} />
        <Route path="/ProjectsScreen" component={ProjectsScreen} />
        <Route path="/Signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import React, {useEffect} from 'react';
import Navbar from "./components/Navbar";
import HomepageScreen from './pages/HomepageScreen';
import CoursesScreen from './pages/CoursesScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import ProfileScreen from './pages/ProfileScreen';
import CoursesMainScreen from './pages/CoursesMainScreen';
import Signin from './pages/Signin'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';



function App() {
  const [token, setToken, deleteToken] = useCookies(['mr-token']);


  return (

    <Router>
     
      <Navbar />
      <Switch>
        <Route path="/HomepageScreen" exact component={HomepageScreen} />
        <Route path="/CoursesScreen" component={CoursesScreen} />
        <Route path="/ProjectsScreen" component={ProjectsScreen} />
        <Route path="/ProfileScreen" component={ProfileScreen} />
        <Route path="/Signin" component={Signin} />
        <Route path="/CoursesMainScreen" component={CoursesMainScreen} />
      </Switch>
    </Router>
  );
}

export default App;

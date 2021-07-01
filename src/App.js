import React, { useContext } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NoFound/NoFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';
import Login from './Components/LoginAuth/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/LoginAuth/PrivateRoute/PrivateRoute';
import AddPost from './Components/UsersProfile/AddPost/AddPost';
import UserPost from './Components/UsersProfile/UserPost/UserPost';
export const UserContext = createContext()

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({});
  console.log("login", loggedInUser);
  return (
    < UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router >
        <Switch>

          <PrivateRoute path="/post/details/:_id"  >
            <PostDetails />
          </PrivateRoute>

          
          <PrivateRoute path="/addPost"  >
            <AddPost />
          </PrivateRoute>

          < Route path="/home" component={Home} />
          < Route path="/myPost" component={UserPost} />
          {/* <Route path="/addPost" component={AddPost} /> */}
          < Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />

        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
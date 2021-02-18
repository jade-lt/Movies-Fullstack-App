import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import Nav from "./components/Nav";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";
import { LoginPage, fakeAuth } from "./components/LoginPage";
// When App loads the first time/refreshed
const isLoggedIn = () => {
  if (window.localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  return (
    <Router>
      <div>
        <Nav logout={setLoggedIn} loginStatus={loggedIn} />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">{loggedIn && <Add />}</Route>
          <Route path="/edit/:id">{loggedIn && <Edit />}</Route>
          <Route path="/edit">
            <Redirect to="/" />
          </Route>
          <Route path="/login">
            <LoginPage setLoginStatus={setLoggedIn} />
          </Route>
          <Route path="/">{loggedIn && <Home />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         //todo add token check here
//         fakeAuth.isAuthenticated  ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function AllowRenderRoute(props) {
//   console.log("AllowRenderRoute props", props);
//   return (
//     <Route {...props}>
//       {window.localStorage.getItem("token") && props.children}
//     </Route>
//   );
// }

export default App;

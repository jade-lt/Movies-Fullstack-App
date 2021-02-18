import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { login } from "../api";
import jwt from "jwt-decode";
import moment from "moment";

export const fakeAuth = {
  isAuthenticated: window.localStorage.getItem("token") ? true : false,
  authenticate(cb) {
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    window.localStorage.removeItem("token");
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export function LoginPage(props) {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      username: username,
      password: password,
    })
      .then((token) => {
        //handle token
        console.log(token);
        const decoded = jwt(token);
        console.log(decoded);
        const expires = moment.unix(decoded.exp);
        console.log(expires);

        const isBeforeExpiry = moment().isBefore(expires);
        console.log(isBeforeExpiry);

        //todo
        /*
                once logged in, check local storage for token
                decode token on other pages
                check if exists & expiry
            */
        localStorage.setItem("token", token);
        props.setLoginStatus(true);
        history.push("/");
        //localStorage.getItem('token'); //gets token
      })
      .catch((e) => {
        console.log(e);
        //do something to tell user it failed
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={username}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

//export default LoginPage;

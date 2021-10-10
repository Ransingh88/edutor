import React, { useState } from "react";

import styles from "./login.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  buton: {
    width: "100%",
    textTransform: "none",
    background: "red",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "red",
    },
  },

  buton1: {
    width: "100%",
    textTransform: "none",
    background: "rgb(0,207,53)",
    padding: "10px 0px",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",

    "&:hover": {
      background: "rgb(0,207,53)",
    },
  },
  inputBoxes: {
    "& input": {
      marginTop: "10px",
    },
  },
  email: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "15px 0px",
    textIndent: "10px",
    fontSize: "1.0em",
    minWidth: "250px",
    borderRadius: "2px",
    backgroundColor: "white",
  },
  log_tnc: {
    color: "white",
    fontSize: "small",
  },
  buton3: {
    width: "100%",
    textTransform: "none",
    background: "white",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "white",
    },
  },
}));
export default function Login() {
  const history = useHistory()
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginUser = async (e) => {
    const res = await fetch('/signin', {
       method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
       email, password
      })
    })
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials")
    } else {
      window.alert("login successfull")
      history.push("/")
    }
  }
  return (
    <div className={styles.main_log}>
      <div className={styles.log_upper}>
        <div className={styles.log_icon}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
        </div>
        <h1 className={styles.log_head}>Welcome To Edutor</h1>
        <form method="POST">
          <div className={classes.inputBoxes}>
            <input
              className={classes.email}
              type="email"
              name="email"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              name="password"
              className={classes.email}
              type="password"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </form>
        <p className={classes.log_tnc}>Forget Your Password ?</p>
        <Button className={classes.buton} variant="contained" onClick={loginUser}>
          Log In
        </Button>

        <div className={styles.log_divide}>
          <div className={styles.log_lin}></div>
          <span> or</span>

          <div className={styles.log_lin}></div>
        </div>

        <Button
          className={classes.buton3}
          variant="contained"
          startIcon={<FcGoogle />}
        >
          Continue with Google
        </Button>

        <Button
          className={classes.buton3}
          variant="contained"
          startIcon={<FaFacebook />}
        >
          Continue with Facebook
        </Button>

        <div className={styles.log_ftxt}>Not on Edutor yet ? Sign Up</div>
      </div>
    </div>
  );
}

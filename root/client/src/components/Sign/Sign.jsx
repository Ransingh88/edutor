import React, { useState } from "react";
import styles from "./sign.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  buton: {
    width: "100%",
    textTransform: "none",
    background: "rgb(0,207,53)",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "rgb(0,207,53)",
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
    backgroundColor: "whitesmoke",
  },
  tnc: {
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
export default function Sign() {
  const history = useHistory()
  const classes = useStyles();
  const [user, setUser] = useState({ name: "", email: "", password: "" })
  
  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]: value})
  }

  const PostData = async (e) => {
    const { name, email, password } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    })
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registeratiion")
      console.log("Invalid registeratiion")
    } else {
      window.alert("registeratiion successfully")
      console.log("registeratiion successfully")

      history.push("/login")
    }
  }
  return (
    <div className={styles.main_sign}>
      <div className={styles.upper}>
        <div className={styles.sign_icon}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
        </div>
        <h1 className={styles.sign_head}>Welcome To Edutor</h1>
        <form method="POST">
          <div className={classes.inputBoxes}>
            <input
              name="name"
              className={classes.email}
              type="text"
              value={user.name}
              onChange={handleInputs}
              placeholder="Name"
            />
            <input
              className={classes.email}
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Email"
            />

            <input
              name="password"
              className={classes.email}
              type="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
        </form>
        <p className={classes.tnc}>{/* Forget Your Password ? */}</p>
        <Button className={classes.buton} variant="contained" onClick={PostData}>
          Sign Up
        </Button>

        <div className={styles.divide}>
          <div className={styles.lin}></div>
          <span> or</span>

          <div className={styles.lin}></div>
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

        <div className={styles.sign_ftxt}>Already on Edutor ? Log In</div>
      </div>
    </div>
  );
}

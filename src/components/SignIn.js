import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AlertMessage from "../components/AlertMessage";
// import * as actions from "../../redux/action/signUpAction";
// import { connect } from "react-redux";

// import api from "../config/api";
import firebase from "../config/firebaseConfig";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [userAuth, setuserAuth] = useState(false);
  const classes = useStyles();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("res", res);
        setuserAuth(true);
      })
      .catch((error) => {
        // setLoginError(error.message);
        setLoginError("ankhaa boojgoi passwordoo zuw oruul");
        console.log("error", error);
      });
    //   api
    //     .post("data.json", user)
    //     .then(console.log("OK"), setuserAuth(true))

    //     .catch(setLoginError("ankhaa boojgoi passwordoo zuw oruul"));
    //   // alert(`${email} ${password}`);

    //   // Login aldaa garwal

    //   // ugui bol setAuth iin true bolgood home sceen userne
    //   // setuserAuth(true);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <strong> ログイン</strong>
        </Typography>
        <hr />
        {userAuth && <Redirect to="/home" />}
        {loginError && <AlertMessage message={loginError} />}
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            endIcon={<Icon>send</Icon>}
            disabled={!validateForm()}
            fullWidth
            // variant="outlined"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            サインイン
          </Button>
        </form>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

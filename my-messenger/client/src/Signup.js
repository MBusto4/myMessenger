import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useStyles } from "./styles";

import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justifyContent="center">
      <Box>
        <Box className={classes.bg__div}></Box>
        <img src="./Texting-2.jpeg" alt='' className={classes.bg__img} />
        <img src="./bubble.svg" alt='' className={classes.bg__svg} />
        <Typography className={classes.svg__text}>Converse with anyone with any language</Typography>
      </Box>
      <Box>
        <Grid container item className={classes.top__container}>
          <Typography className={classes.register__text}>Already have an account?</Typography>
          <Button onClick={() => history.push("/login")}
            className={classes.top__container__btn}
          >Login</Button>
        </Grid>
        <form onSubmit={handleRegister}>
          <Grid className={classes.form__details}>
            <Typography className={classes.signup__message}>Create an account.</Typography>
            <Grid>
              <FormControl className={classes.form__signup__control}>
                <Typography className={classes.signup__form__title}>Username</Typography>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                  className={classes.form__textField}
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl className={classes.form__signup__control}>
                <Typography className={classes.signup__form__title}>Email-address</Typography>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                  className={classes.form__textField}
                />
              </FormControl >
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword} className={classes.form__signup__control}>
                <Typography className={classes.signup__form__title}>Password</Typography>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                  className={classes.form__textField}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword} className={classes.form__signup__control}>
                <Typography className={classes.signup__form__title}>Confirm Password</Typography>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                  className={classes.form__textField}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid className={classes.btn__container}>
              <Button type="submit" variant="contained" size="large"
                className={classes.form__create__btn}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

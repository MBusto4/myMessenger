import React from "react";
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
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";


const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
          <Typography className={classes.register__text}>Dont have an account?</Typography>
          <Button onClick={() => history.push("/register")}
            className={classes.top__container__btn}
          >Create account</Button>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid className={classes.form__details}>
            <Typography className={classes.login__message}>Welcome back!</Typography>
            <Grid>
              <FormControl margin="normal" required className={classes.form__login__control}>
                <Typography className={classes.login__form__title}>Email-address</Typography>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  className={classes.form__textField}
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <Typography className={classes.login__form__title}>Password</Typography>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
                className='login__textField'
              />
            </FormControl>
            <Grid className={classes.btn__container}>
              <Button type="submit" variant="contained" size="large"
                className={classes.form__login__btn}
              >
                Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

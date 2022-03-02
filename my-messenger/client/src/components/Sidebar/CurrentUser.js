import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { BadgeAvatar } from "./index";
import { LogoutIcon } from "@heroicons/react/outline";
import { Redirect } from "react-router-dom";
import { clearOnLogout } from "../../store/index";
import { logout } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    height: 60,
    marginTop: 23,
    marginLeft: 6,
    display: "flex",
    alignItems: "center",
    boxShadow: "0 2px 10px 10px rgba(88,133,196,0.30)",
    padding: 10
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
  },
  username: {
    letterSpacing: -0.23,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 17,
    color: 'white'
  },
  logOutIcon: {
    color: "white",
    marginRight: 8,
    height: '25px',
    width: '25px',
    cursor: 'pointer'
  }
}));

const CurrentUser = (props) => {
  const classes = useStyles();
  const user = props.user || {};
  const { logout } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user.id) {
      setIsLoggedIn(true);
    }
  }, [user.id]);

  if (!user.id) {
    // If we were previously logged in, redirect to login instead of register
    if (isLoggedIn) return <Redirect to="/login" />;
    return <Redirect to="/register" />;
  }

  const handleLogout = async () => {
    await logout(user.id);
  };


  return (
    <Box className={classes.root}>
      <BadgeAvatar photoUrl={user.photoUrl} online={true} />
      <Box className={classes.subContainer}>
        <Typography className={classes.username}>{user.username}</Typography>
        <LogoutIcon className={classes.logOutIcon} onClick={handleLogout} />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (id) => {
      dispatch(logout(id));
      dispatch(clearOnLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);

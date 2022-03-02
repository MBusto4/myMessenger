import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    color: "white",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#6ECB63",
    borderRadius: "10px 10px 0 10px",
  },
  imageStyle: {
    width: '100px',
    height: '85px',
    margin: '10px',
    borderRadius: 10,
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      {text === '' ? (
        <Box>
          {attachments?.map((image, imageKey) => (
            <img alt='' key={imageKey} src={image} className={classes.imageStyle} />
          ))}
        </Box>
      ) : (
        <>
          <Box>
            {attachments?.map((image, imageKey) => (
              <img alt='' key={imageKey} src={image} className={classes.imageStyle} />
            ))}
          </Box>
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SenderBubble;

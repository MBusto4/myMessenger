import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage, fetchConversations } from "../../store/utils/thunkCreators";
import {
  Box,
  Typography,
  TextField,
  FormLabel,
  FormControl,
  FilledInput,
} from "@material-ui/core";
import {
  DuplicateIcon
} from "@heroicons/react/outline"
import axios from 'axios'

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 6,
    marginBottom: 20,
    "&:hover": {
      backgroundColor: '#F4F6FA'
    }
  },
  folderIcon: {
    width: '40px',
  },
  inputHide: {
    display: 'none'
  },
  folderDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#F4F6FA",
    height: 70,
    borderRadius: 6,
  },
  formDiv: {
    display: 'flex'
  },
  folderIconText: {
    marginRight: '10px'
  },
  loadingText: {
    marginBottom: '20px',
    fontSize: '30px',
    color: 'white'
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const { postMessage, fetchConversations, otherUser, conversationId, user } = props;
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState([]);
  let filePicker = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const textBody = event.target.text.value
    if (filePicker === "") {

      const reqBody = {
        text: textBody,
        recipientId: otherUser.id,
        conversationId,
        sender: conversationId ? null : user
      };
      await postMessage(reqBody)
      try {
        fetchConversations()
      } catch (error) {
        console.log(error)
      }
    } else {
      setLoading(true)
      const urls = await uploadImages()
      const reqBody = {
        text: textBody,
        recipientId: otherUser.id,
        conversationId,
        sender: conversationId ? null : user,
        attachments: urls
      };
      await postMessage(reqBody)
      fetchConversations()
      setLoading(false)
    }
    try {
      filePicker = ''
    } catch (error) {
      console.log(error)
    }
  };

  const uploadImages = async () => {
    const uploadedFiles = []
    const axiosInstance = axios.create()
    for (let file of files) {
      const data = new FormData()
      data.append("file", file)
      data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)
      const response = await axiosInstance.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, data)
      uploadedFiles.push(response.data.secure_url)
    }
    setFiles([])
    return uploadedFiles
  }

  const handleOpenFileInput = () => {
    filePicker.current.click();
  };

  return (
    <Box>
      <Box>
        {loading ? (
          <Typography className={classes.loadingText}>Sending Message ...</Typography>
        ) : (
          <Box>
            <form className={classes.root} onSubmit={handleSubmit}>
              <FormControl fullWidth hiddenLabel>
                <Box className={classes.formDiv}>
                  <FilledInput
                    fullWidth
                    id="inputText"
                    classes={{ root: classes.input }}
                    disableUnderline
                    placeholder="Type something..."
                    name="text"
                  />
                  <Box className={classes.folderDiv}>
                    <FormLabel onClick={handleOpenFileInput}>
                      <DuplicateIcon className={classes.folderIcon} />
                    </FormLabel>
                    <TextField
                      inputProps={{ multiple: true }}
                      inputRef={filePicker}
                      type="file"
                      onChange={(e) => setFiles(e.target.files)}
                      className={classes.inputHide}
                    >
                    </TextField>
                    {files.length > 0 ? <Typography className={classes.folderIconText}>({files.length})</Typography> : null}
                  </Box>
                </Box>
              </FormControl>
            </form>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
    fetchConversations: () => {
      dispatch(fetchConversations());
    }
  };
};

export default connect(null, mapDispatchToProps)(Input);

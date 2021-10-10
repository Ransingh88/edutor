import React from 'react'
import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from './VideoPlayer';
import Options from './Options';
import Notification from './Notification';
import { makeStyles } from "@material-ui/core/styles";
import styles from "./video.module.css"

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    margin: "auto"
  },
}));
export default function VideoChat() {
     const classes = useStyles();
    return (
        <div className={styles.main_video}>
            <AppBar className={classes.wrapper} position="static" color="inherit">
                <Typography variant="h2" align="center">Connect with Mentor</Typography>
            </AppBar>

            {/* Video Player */}
            {/* Options -> Notification */}
            <VideoPlayer/>
            <Options>
                <Notification/>
            </Options>
            
        </div>
    )
}

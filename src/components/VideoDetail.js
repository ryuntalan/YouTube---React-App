import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div> Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={0} className="screen-size">
        <iframe
          frameBorder="0"
          className="video-screen"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;

import React from "react";

import { Grid } from "@material-ui/core";

import VideoDetail from "./VideoDetail";

import SearchBar from "./SearchBar";

import youtube from "../api/youtube";

class Lofi extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("smooth jazz study music");
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC2l5lTn2wi7D_Ah_r7U5DclPIMUnNPtmU",
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div style={{ background: "#CEDECC" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <VideoDetail video={selectedVideo} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>

          <Grid item>
            <h3 className="suggestions">
              <b>search suggestions:</b> smooth hop, chill jazz, jazz beats
            </h3>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Lofi;

import React, { Component } from "react";

import { connect } from "react-redux";
import { getVideos } from "../actions/videoActions";
import PropTypes from "prop-types";

import Video from "./Video";

class VideoBuilder extends Component {

    componentDidMount(){
        this.props.getVideos();
    }

  render() {
      const {videos} = this.props.video;
    return (
      <div className="grid-cont">
        {videos.map((vid, i) => {
          return <Video key={i} data={vid} />;
        })}
      </div>
    );
  }
}

VideoBuilder.propTypes = {
  getVideos: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired
};

// follow the naming on reducers/index.js
const mapStateToProps = state => ({
  video: state.video
});

export default connect(
  mapStateToProps,
  { getVideos }
)(VideoBuilder);

import React from "react";

import avatar from "../assets/avatar.jpg";

const Video = props => {
  const { image, title, channel, views } = props.data;
  return (
    <div className="video-container">
      <img className="img-item" src={image} alt="Videos" />
      <img src={avatar} alt="img" className="channelAvatar" />
      <h5 className="card-title">{title}</h5>
      <div className="grid-desc">
        <span>{channel.name}</span>
        <span>{views} views</span>
        <span>7 hours ago</span>
      </div>
    </div>
  );
};

export default Video;

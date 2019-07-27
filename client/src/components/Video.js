import React from "react";

import avatar from "../assets/avatar.jpg";

const Video = props => {
  const { image, title, channelName, views,duration, uploadDate } = props.data;
  return (
    <div className="video-container">
      <div className="img-container">
        <img className="img-item" src={image} alt="Videos" />
        <div className='hover'>
          <i className="fas fa-play"></i>
        </div>
      </div>
      
      <img src={avatar} alt="img" className="channelAvatar" />
      <a href='/' data-toogle="tooltip" data-placement="auto bottom"  title={title}><h5 className="card-title">{title}</h5></a>
      <div className="grid-desc">
        <a href='/' data-toogle="tooltip" data-placement="auto bottom"  title={channelName}><span>{channelName}</span></a>
        <span>{views} views</span>
        <span>{uploadDate}</span>
      </div>
    </div>
  );
};

export default Video;

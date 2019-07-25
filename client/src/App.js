import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import AppNavbar from "./components/AppNavbar";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

class App extends Component {
  state = {
    isSidebarActive: true,
    videos: [
      {
        title: "Minecraft Video",
        views: 201,
        uploadDate: "2019-06-05",
        image:
          "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
        duration: 210,
        channel:{
          name: "PewDiePie",
          image: "",
        }
      },
      {
        title: "Epic Minecraft",
        views: 1,
        uploadDate: "2019-06-05",
        image:
          "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
        duration: 21,
        channel:{
          name: "PewDiePie",
          image: "",
        }
      },
      {
        title: "Minecraft letsplay",
        views: 201,
        uploadDate: "2019-06-05",
        image:
          "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
        duration: 210,
        channel:{
          name: "PewDiePie",
          image: "",
        }
      },
      {
        title: "Minecraft Video",
        views: 201,
        uploadDate: "2019-06-05",
        image:
          "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
        duration: 210,
        channel:{
          name: "PewDiePie",
          image: "",
        }
      },
      {
        title: "Minecraft Video",
        views: 201,
        uploadDate: "2019-06-05",
        image:
          "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
        duration: 210,
        channel:{
          name: "PewDiePie",
          image: "",
        }
      },
      {
        title: "Minecraft Video",
        views: 201,
        uploadDate: "2019-06-05",
        image:
          "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
        duration: 210,
        channel:{
          name: "PewDiePie with jackadadasda",
          image: "",
        }
      },
      {
        title: "Minecraft Video",
        views: 201,
        uploadDate: "2019-06-05",
        image:
          "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
        duration: 210,
        channel:{
          name: "PewDiePie",
          image: "",
        }
      }
    ]
  };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth < 1120 && this.state.isSidebarActive === true) {
          this.toggle();
        } else if (
          window.innerWidth > 1240 &&
          this.state.isSidebarActive === false
        ) {
          this.toggle();
        }
      },
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener();
  }

  toggle = () => {
    this.setState({
      isSidebarActive: !this.state.isSidebarActive
    });
  };

  render() {
    return (
      <>
        <AppNavbar toggler={this.toggle} />
        <div className="wrapper container">
          <Sidebar isOpen={this.state.isSidebarActive} />
          <div className="grid-cont">
            {this.state.videos.map((vid,i) => {
              return <Video key={i} data={vid} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;

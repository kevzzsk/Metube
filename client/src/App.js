import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import {Provider} from 'react-redux';
import store from './store';


import AppNavbar from "./components/AppNavbar";
import Sidebar from "./components/Sidebar";
import VideoBuilder from "./components/VideoBuilder";

class App extends Component {
  state = {
    isSidebarActive: true,
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
      <Provider store={store}>
        <>
        <AppNavbar toggler={this.toggle} />
        <div className="wrapper container">
          <Sidebar isOpen={this.state.isSidebarActive} />
          <VideoBuilder/>
        </div>
        </>
      </Provider>
    );
  }
}

export default App;

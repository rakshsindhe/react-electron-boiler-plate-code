import React, { Component } from "react";
import "./App.less";
import { Button } from "antd";
import {
  OPEN_FILE_UPLOAD_DIALOG_WINDOW,
  FILE_UPLOADED,
} from "./util/constants";

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

export class App extends Component {
  componentDidMount() {
    ipcRenderer.on(FILE_UPLOADED, (event, path) => {
      console.log("FIle Uploaded successfully, Path = ", path);
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(FILE_UPLOADED, (event, path) => {
      console.log("unmounted event");
    });
  }

  handleClick = () => {
    console.log("Clicked me")
    ipcRenderer.send(OPEN_FILE_UPLOAD_DIALOG_WINDOW);
  };
  render() {
    return (
      <div className="App">
        <h1>API Testing Automation Tool</h1>
        <Button onClick={this.handleClick}>Upload File</Button>
      </div>
    );
  }
}

export default App;

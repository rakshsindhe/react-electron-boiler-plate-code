const { app, ipcMain, BrowserWindow, dialog } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const os = require("os");
const {
  OPEN_FILE_UPLOAD_DIALOG_WINDOW,
  FILE_UPLOADED
} = require("../src/util/constants");

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: "",
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on(OPEN_FILE_UPLOAD_DIALOG_WINDOW, event => {
  console.log("RECEIVED INFO FROM CLIENt, =", OPEN_FILE_UPLOAD_DIALOG_WINDOW);

  //New Approach
  if (process.platform !== "darwin") {
    dialog
      .showOpenDialog({
        title: "Select the File to be uploaded",
        defaultPath: "C:\\",
        buttonLabel: "Upload",
        filters: [
          {
            name: "Excel Files",
            extensions: [".xls", ".xlsx"]
          }
        ],
        properties: ["openFile"]
      })
      .then(file => {
        console.log("file.canceled = ", file.canceled);
        if (!file.canceled) {
          global.filepath = file.filePaths[0].toString();
          //Sending the event back to the client
          event.sender.send(FILE_UPLOADED, global.filepath);
          console.log("global.filepath = ", global.filepath);
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    dialog
      .showOpenDialog({
        title: "Select the File to be uploaded",
        defaultPath: path.join(__dirname, "../assets/"),
        buttonLabel: "Upload",
        filters: [
          {
            name: "Excel Files",
            extensions: [".xls", ".xlsx"]
          }
        ],
        properties: ["openFile", "openDirectory"]
      })
      .then(file => {
        console.log(file.canceled);
        if (!file.canceled) {
          global.filepath = file.filePaths[0].toString();
          //Sending the event back to the client
          event.sender.send(FILE_UPLOADED, global.filepath);
          console.log("global.filepath = ", global.filepath);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
});

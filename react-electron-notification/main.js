// import { app, BrowserWindow } from 'electron';
const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

const iconPath = './src/assets/smile.png';
function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 150,
    transparent: true,
    modal: true,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html')
}

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

ipcMain.on('notify', (_, message) => {
  new Notification({
    title: 'Just smile :)',
    subtitle: 'small advice',
    icon: iconPath,
    body: message
  }).show()
})
app.on('ready', createWindow);
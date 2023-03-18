const { BrowserWindow } = require("electron/main")
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 900,
    // width: 300,
    // height: 300,
    x: -1200,
    y: 700,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // contextIsolation: false
      nodeIntegration: true,
    },
  })
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
  mainWindow.webContents.openDevTools()
}

module.exports = {
  createWindow
}
const { BrowserWindow, screen } = require("electron/main")
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 900,
    x: -1200,
    y: 700,
    // center: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // contextIsolation: false
      // nodeIntegration: true,
      // sandbox: false,
    },
  })
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
  mainWindow.webContents.openDevTools()

  // setTimeout(() => {
  // mainWindow.center()
  // const { width } = screen.getPrimaryDisplay().workAreaSize;
  // console.log(width) // 2560
  // const x = width / 2 - 300
  // mainWindow.setBounds({ width: 800, height: 800, x, y: 100 }, true)
  // }, 1000)
}

module.exports = {
  createWindow
}
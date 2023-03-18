const { app, BrowserWindow, ipcMain } = require('electron')
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
      contextIsolation: false
    },
  })
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('mainEvent', (event, options) => {
  console.log('主进程收到');
})
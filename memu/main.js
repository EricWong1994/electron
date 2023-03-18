const { BrowserWindow, app } = require('electron')
const path = require('path')
const { createMenu } = require('./menu')
require('./contextmenu.js')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    x: -1200,
    y: 700,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js')
    },
    show: false
  })

  mainWindow.showInactive()
  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
  return mainWindow;
}

app.whenReady().then(() => {
  const win = createWindow()
  createMenu(win)
})

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length == 0 && process.platform == 'darwin') {
    createWindow()
  }
})

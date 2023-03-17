const { BrowserWindow, app, ipcMain, dialog } = require('electron')
const { createMenu } = require('./menu')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    x: -1200,
    y: 700,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // nodeIntegration: true
    },
  })

  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))

  createMenu(mainWindow)
}
console.log('main')
app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('saveFile', (event) => {
  console.log('saveFile@@@@@@@@@@@@@@@@@@@@')
  BrowserWindow.fromWebContents(event.sender).send('msg', '已经收到通知')
})

ipcMain.handle('selectFile', async (event) => {
  const { filePaths } = await dialog.showOpenDialog({})
  return filePaths[0]
})

ipcMain.on('updateTitle', (event, value) => {
  BrowserWindow.fromWebContents(event.sender).title = value
})


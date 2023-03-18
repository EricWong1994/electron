const { app, BrowserWindow, ipcMain, screen } = require('electron')
const path = require('path')
const { createWindow } = require('./window')

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('mainEvent', (event, options) => {
  console.log('主进程收到');
})

ipcMain.on('setWindowPosition', (event, options) => {
  console.log('主进程收到');
  console.log('options: ', options);
  const win = BrowserWindow.fromWebContents(event.sender)
  // width: 2560  height: 1341
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const x = width / 2 - options.width / 2
  const y = height / 2 - options.height / 2 //  620.5
  win.setBounds({ ...options, x, y: Math.floor(y) }, true)
})
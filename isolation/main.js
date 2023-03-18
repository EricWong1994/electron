const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { createWindow } = require('./window')

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('mainEvent', (event, options) => {
  console.log('主进程收到');
})
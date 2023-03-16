/**
 * 主进程： nodejs环境
 */
const { BrowserWindow, app } = require('electron')
const path = require('path')

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 300,
    alwaysOnTop: true, // 窗口是否永远在别的窗口的上面
    x: 100,
    y: 1000
  })

  // mainWindow.loadURL('https://www.houdunren.com')
  // alert(999) //  alert is not defined

  mainWindow.webContents.toggleDevTools()
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
})
const { BrowserWindow, app } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true,
  })
  // .loadFile(path.resolve(__dirname, 'index.html')) //可链式调用
  win.webContents.toggleDevTools()
  win.loadFile(path.resolve(__dirname, 'index.html'))
}

app.whenReady().then(() => {
  createWindow()
})
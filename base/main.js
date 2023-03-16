/**
 * 主进程： nodejs环境
 */
const { BrowserWindow, app } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true, // 窗口是否永远在别的窗口的上面
    x: 100,
    y: 1030,
    frame: false // 是否展示标题栏
  })
  // mainWindow.loadURL('https://www.houdunren.com')
  // mainWindow.webContents.toggleDevTools() // 打开控制台
  mainWindow.setAspectRatio(1) // 拖动窗口是拉伸宽高比例
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})

app.on('activate', () => {
  createWindow()
})
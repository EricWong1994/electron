// 右键菜单
const { ipcMain, app, shell, Menu, BrowserWindow } = require("electron");

ipcMain.on('mainPopMenu', (event) => {
  const template = [
    {
      label: '退出',
      // click: app.quit()
      click: () => app.quit()
    },
    {
      label: '访问官网',
      click: () => {
        shell.openExternal('https://www.baidu.com')
      }
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  // event.sender 才能知道是要关闭哪个窗口
  menu.popup(BrowserWindow.fromWebContents(event.sender))
})
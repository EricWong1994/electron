const { Menu, shell, app, BrowserWindow } = require("electron");
console.log('process.platform: ', process.platform);
const isMac = process.platform == 'darwin'

const createMenu = (win) => {
  const menu = [
    {
      // label: '菜单',
      label: app.name,
      submenu: [
        {
          label: '访问网站',
          accelerator: 'CommandOrControl+B',
          click: () => {
            shell.openExternal('https://www.baidu.com')
          }
        },
        {
          label: '渲染进程事件',
          click: () => {
            win.webContents.send('toPreload', 1)
          }
        }
      ]
    },
    {
      label: '操作',
      submenu: [
        {
          label: "打开窗口",
          accelerator: 'CommandOrControl+A',
          click: () => {
            new BrowserWindow({
              width: 300,
              height: 300
            })
          }
        },
        { type: 'separator' },
        {
          role: isMac ? 'close' : 'quit'
        }
      ]
    }
  ]
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
  // Menu.setApplicationMenu(null)
}

module.exports = {
  createMenu
}
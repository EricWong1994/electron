const { contextBridge, ipcRenderer, shell } = require('electron')
// shell.openExternal('https://houdunren.com')

// const fs = require('fs')
// fs.writeFileSync('a1.txt', 'abcc')

// contextBridge只能在contextIsolation为开启的情况使用，否则报错
contextBridge.exposeInMainWorld('api', {
  toMain: () => {
    ipcRenderer.send('mainEvent')
  }
})

window.hd = 'hhhhh'

// window.api = {
//   toMain: () => {
//     ipcRenderer.send('mainEvent')
//   },
// }

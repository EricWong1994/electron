const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
  // 这里的callback为 renderer中注册的回调事件
  menuEvent: (callback) => {
    ipcRenderer.on('toPreload', (event, value) => {
      console.log('value: ', value);
      callback(value)
    })
  }
})

window.addEventListener('contextmenu', () => {
  // console.log('33333333333')
  ipcRenderer.send('mainPopMenu')
})

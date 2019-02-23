//const electron = require('electron');

const { app, BrowserWindow } = require('electron')

function createWindow () {   
  // 创建浏览器窗口
  win = new BrowserWindow({ width: 1024, height: 768, frame: false,fullscreen: true })

  // 然后加载应用的 index.html。
  win.loadFile('index.html')
}

app.on('ready', createWindow)

const {BrowserWindow} = require('electron')
const {remote} = require('electron');
const app = require('electron').app
const dialog = require('electron').dialog


let win 

app.on('ready', function() {
	win = new BrowserWindow({width: 1024, height: 768})
	//win.webContents.openDevTools()
	var url_0 = "file://" + __dirname + "/index.html"
	var url_1 = "http://www.baidu.com"
	var url_2 = "https://www.baidu.com"
	var url_3 = "https://kyfw.12306.cn/otn"
	win.loadURL(url_3);	
})

app.on('certificate-error', (event, webContents, url, error, cert, cb) => {
  //.showCertificateTrustDialog(win, {certificate: cert, message: "yo this is super dodgey"}, () => {}) 
  event.preventDefault()
  cb(true)
})


import { app, BrowserWindow } from "electron"

export default class App {
    constructor() {
        this.start()
    }

    public mainWin: BrowserWindow | undefined

    async start() {
        app.addListener
        await app.whenReady()
        this.mainWin = new BrowserWindow({
            width: 500,
            height: 500
        })
        const isDev = !app.isPackaged
        if (isDev) {
            this.mainWin.loadURL("http://127.0.0.1:5173/#/path")
        } else {
            this.mainWin.loadFile("index.html/", { hash: "#/path" })
        }
    }
}

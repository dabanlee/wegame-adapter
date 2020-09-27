export default class Worker {
    public onmessage: (data: any) => void
    private _file: any
    private _worker: any
    public static previousWorker: Worker
    constructor(file: any) {
        this.onmessage = null

        // 目前 微信小游戏中 Worker 最大并发数量限制为 1 个，
        // 所以创建新Worker前, 需要结束现有的 Worker.terminate
        if (Worker.previousWorker) {
            Worker.previousWorker.terminate()
        }
        Worker.previousWorker = this

        this._file = file

        this._worker = wx.createWorker(file)

        this._worker.onMessage((res: any) => {
            if (this.onmessage) {
                this.onmessage({
                    target: this,
                    data: res,
                })
            }
        })
    }

    postMessage(message: string, transferList: []) {
        this._worker.postMessage(message, transferList)
    }

    terminate() {
        this._worker.terminate()
        Worker.previousWorker = null
    }
}

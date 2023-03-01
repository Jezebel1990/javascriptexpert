export default class View {
    #btnInit = document.querySelector('#init')
    #statusElement = document.querySelector('#status')
    #videoFrameCanvas = document.createElement('canvas')
    #canvasContext = this.#videoFrameCanvas.getContext('2d', { willReadFrequently: true })
    #videoElement = document.querySelector('#video')

getVideoFrame(video) {
    const canvas = this.#videoFrameCanvas
    const [ widht, height] = [video.videoWidth, video.videoHeight]
    canvas.width = widht
    canvas.height = height

    this.#canvasContext.drawImage(video, 0, 0, widht, height)
    return this.#canvasContext.getImageData(0, 0, widht, height)

}

togglePlayVideo() {
    if(this.#videoElement.paused) {
        this.#videoElement.play()
        return;
    }
    this.#videoElement.pause()
}

    enableButton() {
        this.#btnInit.disable = false
    }

    configureOnBtnClick(fn) {
        this.#btnInit.addEventListener('click, fn')
    }
    log(text) {
        this.#statusElement.innerHTML = text
    }
}
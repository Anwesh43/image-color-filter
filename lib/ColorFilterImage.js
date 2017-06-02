const Canvas = require('canvas')
const Image = Canvas.Image
class ColorFilterImage {
    constructor(src,color) {
        this.src = src
        this.color = color
    }
    create() {
        const image = new Image()
        image.src = this.src
        const canvas = new Canvas()
        canvas.width = image.width
        canvas.height = image.height
        const context = canvas.getContext('2d')

        const w = 200, h = 200
        canvas.width = w
        canvas.height = h
      //const context = canvas.getContext('2d')
      // context.drawImage(image,0,0)
        context.fillStyle = this.color
        context.globalAlpha = 0.5
        context.fillRect(0,0,w,h)
        const dataURL = canvas.toDataURL()
        if(dataURL) {
            const imgParts = dataURL.split(",")
            if(imgParts.length == 2) {
                const base64String = imgParts[1]
                console.log(base64String)


            }
        }
    }
}
module.exports = ColorFilterImage

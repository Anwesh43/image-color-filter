const Canvas = require('canvas')
const Image = Canvas.Image
const ImageSaver = require('image-saver-nodejs/lib')
class ColorFilterImage {
    constructor(src) {
        this.src = src
    }
    create(fileName,color) {
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
        context.drawImage(image,0,0)
        context.fillStyle = color
        context.globalAlpha = 0.5
        context.fillRect(0,0,w,h)
        const dataURL = canvas.toDataURL()
        if(dataURL) {
            const imgParts = dataURL.split(",")
            if(imgParts.length == 2) {
                const base64String = imgParts[1]
                const imageSaver = new ImageSaver()
                imageSaver.saveFile(fileName,base64String).then((data)=>{
                    console.log("image is saved successfully")
                }).catch((err)=>{
                    console.log("saving of image failed")
                })

            }
        }
    }
}
module.exports = ColorFilterImage

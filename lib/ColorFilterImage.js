class ColorFilterImage {
    constructor(src,color) {
        this.src = src
        this.color = color
    }
    create() {
        const image = new Image()
        image.src = this.src
        image.onload = () => {
            const canvas = create('canvas')
            const w = image.width, h  image.height
            canvas.width = w
            canvas.height = h
            const context = canvas.getContext('2d')
            context.drawImage(image,0,0)
            context.fillStyle = color
            context.globalAlpha = 0.5
            context.fillRect(0,0,w,h)
            console.log(canvas.toDataURL())
        }

    }
}
module.exports = ColorFilterImage

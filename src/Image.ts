import * as mixin from './util/mixin'

export default function() {
    const image = wx.createImage()

    if (!('tagName' in image)) {
        image.tagName = 'IMG'
    }

    mixin.parentNode(image)
    mixin.classList(image)

    return image
}

/*
  preloadImages: returns a promise 
  @param object
    {
      images: (array) all the image paths to be load
      imageRoot: (optional) root path of the images ,
      onUpdate: (optional) on update funciton with progress arg 0 ~ 1,
      debug: (optional) boolean, if ture it outputs progress console log
    }
*/

export function preloadImages({ images = [], imageRoot = '', onUpdate = () => {}, debug = false }) {
  let loadedImages = 0
  let totalImage = images.length
  let imageObj = {}

  return new Promise((resolve, reject) => {
    if (debug) {
      console.log('preloadImages start loading:', images)
    }
    // resolve if no images to load
    if (!totalImage) {
      resolve()
    }

    for (let i = 0; i < images.length; i++) {
      const img = new Image()
      const imgSrc = `${imageRoot}${images[i]}`
      img.src = imgSrc
      imageObj[imgSrc] = img

      img.onload = () => {
        loadedImages++

        let progress = loadedImages / totalImage
        onUpdate(progress, img)

        if (debug) {
          console.log(`preloadImages -- ${progress * 100}% ${img.src} loaded`)
        }

        if (progress === 1) {
          resolve(imageObj)
        }
      }

      img.onerror = () => {
        reject(img.src)
      }
    }
  })
}

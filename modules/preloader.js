import Emitter from './classes/emitter.js'

export default class Preloader extends Emitter {
  constructor(el = '[data-p="w"]', items = '[data-preload="true"]') {
    super();
    this.el = document.querySelector(el);
    this.percentage = 0;

    this.items = [...document.querySelectorAll(items)].map((it) => {
      return { dom: it, }
    })
    // console.log('preloading:', this.items);

  }

  async preload() {
    this.items.forEach((item, i) => {
      item.index = i;
      item.loaded = preloadImage(item.dom).then(() => {
        this.itemLoaded();
      })
    });

    this.emit('finished', this.items);
    this.animateOut();
  }

  itemLoaded() {
    this.percentage ++
    // console.log(Math.floor((this.percentage/this.items.length)*100));

  }

  animateOut() {
    this.emit('out');

    if (this.el) this.el.remove();
  }

}


/* Preload Functions */
function preloadImage(image) {
  return new Promise(resolve => {
    if (image.complete && image.naturalHeight !== 0) {
      resolve(image)
    } else {
      image.onload = () => resolve(image)
    }
  })

}

function preloadVideo(video) {
  return new Promise(resolve => {
    if (video.complete && video.videoHeight !== 0) {
      resolve(video)
    } else {
      item.oncanplaythrough = () => resolve(video)
    }
  })

}

// function createTexture(url) {
//   return new Promise((resolve) => {
//
//     resolve(data)
//   })
//
// }

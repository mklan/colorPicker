//MIT licence 2015-2016 - Matthias Klan - matthias.klan@gmail.com
import {
  EventEmitter
} from 'events';

import MediaCropper from './lib/media-cropper';


export default class ColorPicker extends EventEmitter {

  constructor(src, {zoomElement = false, zoomWindowSize = 100, zoom = 4,  clickListener = false }) {
    super();

    this.src = src;

    if (zoomElement) {

      if(zoom < 1) zoom = 1;

      this.mediaCropper = new MediaCropper();

      let contentWrapper = document.createElement('div');
      contentWrapper.id = 'contentWrapper';
      contentWrapper.appendChild(this.src);
      document.body.appendChild(contentWrapper);

      this.zoomElement = document.createElement('div');
      this.zoomElement.id = 'zoom';
      this.zoomElement.style.visibility = 'hidden';
      this.zoomElement.style.position = 'absolute';
      this.zoomElement.style.border = '10px solid';
      this.zoomElement.style.width = zoomWindowSize + 'px';
      this.zoomElement.style.height = zoomWindowSize + 'px';
      this.zoomElement.style.borderRadius = '50%';

      let crossHair = document.createElement('div');
      crossHair.style.width = zoom + 'px';
      crossHair.style.height = zoom + 'px';
      crossHair.style.position = 'absolute';
      crossHair.style.left = (zoomWindowSize/2-zoom/2) + 'px';
      crossHair.style.top =  (zoomWindowSize/2-zoom/2) + 'px';
      crossHair.style.border = '1px solid';
      crossHair.style.borderColor = 'red';
      this.zoomElement.appendChild(crossHair);

      contentWrapper.appendChild(this.zoomElement);

      this.src.addEventListener("mouseleave", (e) => {
        this.zoomElement.style.visibility = 'hidden';
      });

      this.src.addEventListener('mousemove', (e) => {
        let x = e.offsetX === undefined ? e.layerX : e.offsetX;
        let y = e.offsetY === undefined ? e.layerY : e.offsetY;

        let offset = zoomWindowSize / 2 / zoom;

        let result = this.mediaCropper.cropMedia(this.src, {
          stretch: zoom, //you can stretch the result
          //and the position variables for the area to be cropped out
          left: x - offset,
          top: y - offset,
          width: zoomWindowSize,
          height: zoomWindowSize
        });

        this.zoomElement.style.left = (x + zoomWindowSize/2) + 'px';
        this.zoomElement.style.top = (y - zoomWindowSize/2) + 'px';
        this.zoomElement.style.visibility = 'visible';
        this.zoomElement.style.backgroundImage = 'url("'+result.croppedCanvas.toDataURL()+'")';

        let rgb = this.getColor(x, y);
        this.zoomElement.style.borderColor = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
      });


    }

    if (clickListener) {
      this.src.addEventListener('click', (e) => {
        let x = e.offsetX === undefined ? e.layerX : e.offsetX;
        let y = e.offsetY === undefined ? e.layerY : e.offsetY;

        let rgb = this.getColor(x, y);
        this.emit('colorPicked', {
          rgb
        });
      });
    }
  }

  getColor(x, y) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = this.src.clientWidth;
    canvas.height = this.src.clientHeight;
    context.drawImage(this.src, 0, 0, canvas.width, canvas.height);
    return context.getImageData(x, y, 1, 1).data;
  }


}

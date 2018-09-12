# colorPicker
a javascript color picker.
Just click on your source (image, video, canvas) and retrieve the rgb values of the pixel or call the `getColor(x,y)` method.

## Installation

Include the script in your project or import it via ES6

```html
<script src="/path/to/dist/color-picker.js"></script>
```

## Usage

call ColorPicker and pass your source element i.e. image. if you pass `{clickListener : true}` in the parameters, you can to add an event listener `colorPicked`. This event triggers when a color was picked by clicking on the source.


```javascript
const img = document.getElementById('img');
const cp = new ColorPicker(img, {clickListener :true});

cp.on('colorPicked', (data) => {
   console.log(data.rgb);
});
```

or you can call the `getColor(x,y)` method manually and retrieve a pixel's rgb value

```javascript
const cp = new ColorPicker(document.getElementById('img'));
cont rgb = cp.getColor(50,100);
```

if you pass `{zoomElement : true}`, you will get a preview widget appended to you mouse. You can change the size and zoom level by passing `{zoomWindowSize : value in px}` and `{zoom : value > 0}`

```javascript
const img = document.getElementById('img');
const cp = new ColorPicker(img, {clickListener :true, zoomElement : true, zoomWindowSize: 200, zoom: 8});
```


## Demo

http://mklan.github.io/colorpicker/

## Notes

it doesn't work with cross-side content (in the demo I used a blob file to enable local testing)

## Author

[Matthias Klan](https://github.com/mklan/)

contact: matthias.klan@gmail.com


## Licence

The MIT License (MIT)

Copyright (c) 2015 Matthias Klan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

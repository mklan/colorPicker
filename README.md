# colorPicker
a javascript color picker. 
Just click on your source (image, video, canvas) and retrieve the rgb values of the pixel or call the `getColor(x,y)` method.

## Installation

Include the script in your project

```html
<script src="/path/to/ColorPicker.js"></script>
```

## Usage

call ColorPicker and pass the dom id of your source element i.e. image. if you pass `{clickListener : true}` in the parameters, you can to add an event listener `colorPicked`. This event triggers when a color was picked by clicking on the source.
`e.detail.rgb` holds the rgb values.

```javascript
ColorPicker('mySource', {clickListener :true});

document.addEventListener('colorPicked', function (e) {
   var c = e.detail.rgb;
}, false);
```

or you can call the `getColor(x,y)` method manually and retrieve a pixel's rgb value

```javascript
var x = 50;
var y = 50;
var cp = ColorPicker('mySource');
var rgb = cp.getColor(x,y);
```

## Demo

http://codepen.io/anon/pen/BjLOmZ

## Notes

it doesn't work with cross-side content (in the example I used a blob file to enable local testing)

## Author

[Matthias Klan](https://github.com/vaceta/)

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


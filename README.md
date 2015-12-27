# colorPicker
a javascript color picker. 
Just click on your source (image, video, canvas) and retrieve the rgb values of the pixel

## Installation

Include the script in your project

```html
<script src="/path/to/ColorPicker.js"></script>
```

## Usage

call ColorPicker and pass the dom id of your source element i.e. image. if you pass `{clickListener : true}` in the parameters, you can to add an event listener `colorPicked`. This event triggers, when a color was picked.
`e.detail.rgb` holds the rgb values.

```javascript
ColorPicker('mySource', {clickListener :true});

document.addEventListener('colorPicked', function (e) {
   var c = e.detail.rgb;
}, false);
```

or you can call the `getColor(x,y)` method manually and retrieve a pixels rgb value

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


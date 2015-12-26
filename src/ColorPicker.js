function ColorPicker(src) {

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var src = document.getElementById(src);

    src.addEventListener("click", function(e){
        canvas.width = src.clientWidth;
        canvas.height = src.clientHeight;
        context.drawImage(src, 0, 0, canvas.width, canvas.height);

        var x = e.offsetX==undefined?e.layerX:e.offsetX;
        var y = e.offsetY==undefined?e.layerY:e.offsetY;

        var rgb = context.getImageData(x , y , 1, 1).data;
        var event = new CustomEvent('colorPicked', {detail: {'rgb':rgb}});
        document.dispatchEvent(event);
    });

    return this;
}
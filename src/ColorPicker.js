//MIT licence 2015 - Matthias Klan - matthias.klan@gmail.com
function ColorPicker(src, params) {

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var src = document.getElementById(src);

    var params = params || {};
    var listener = params.clickListener == true ? true : false;
    var ctx = this;

    if(listener){
        src.addEventListener("click", function(e){
            var x = e.offsetX==undefined?e.layerX:e.offsetX;
            var y = e.offsetY==undefined?e.layerY:e.offsetY;

            var rgb = ctx.getColor(x,y);
            var event = new CustomEvent('colorPicked', {detail: {'rgb':rgb}});
            document.dispatchEvent(event);
        });
    }

    this.getColor = function(x,y){
            canvas.width = src.clientWidth;
            canvas.height = src.clientHeight;
            context.drawImage(src, 0, 0, canvas.width, canvas.height);
            return context.getImageData(x , y , 1, 1).data;
    }

    return this;
}

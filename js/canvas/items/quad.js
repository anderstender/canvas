;var FillQuad = function(x, y, size, color){
    this.params = {
        x : x,
        y : y,
        size : size,
        color : color
    };
    this.draw = function(context){
        context.beginPath();
        context.fillStyle = this.params.color;
        context.rect(this.params.x, this.params.y, this.params.size, this.params.size);
        context.fill();
    };
};
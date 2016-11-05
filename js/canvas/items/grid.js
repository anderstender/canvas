;var Grid = function(size, b_size, color){
    this.params = {
        size : size,
        b_size : b_size,
        color : color
    }; 
    this.draw = function(context){
        context.beginPath();
        context.strokeStyle = this.params.color;
        for(var i = 0; i < context.canvas.width; i+= (this.params.size + this.params.b_size)){
 
            context.moveTo(i - ((context.lineWidth % 2 == 1) ? 0.5 : 0.0), 0);
            context.lineTo(i - ((context.lineWidth % 2 == 1) ? 0.5 : 0.0), context.canvas.height);
        }
        
        for(var i = 0; i < context.canvas.height; i+= (this.params.size + this.params.b_size)){
            context.moveTo(0, i - ((context.lineWidth % 2 == 1) ? 0.5 : 0.0));
            context.lineTo(context.canvas.width, i - ((context.lineWidth % 2 == 1) ? 0.5 : 0.0));
        }
        context.stroke();
    };
};
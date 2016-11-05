;var Rect = function(coord1, coord2, color){
    this.params = [
        coord1,
        coord2,
        color
    ];
    this.draw = function(context){
        context.beginPath();
        var rect = this.params;
        context.strokeStyle = rect[2];//rect[2] - цвет

        context.rect(  rect[0][0] - ((context.lineWidth % 2 == 1) ? 0.5 : 0.0), 
                            rect[0][1]- ((context.lineWidth % 2 == 1) ? 0.5 : 0.0),
                            rect[1][0], 
                            rect[1][1]); 
        context.stroke();
    };
};



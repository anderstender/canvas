;var Point = function(coord, color){
    this.params = [
        coord,
        color
    ];
    this.draw = function(context){
        context.beginPath();
        var point = this.params;
        context.strokeStyle = point[1];//line[2] - цвет
        context.moveTo(coord[0], coord[1]);
        context.lineTo(coord[0]+ 1, coord[1] + 1);
        context.stroke();
    };
};
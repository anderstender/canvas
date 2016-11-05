;var Line = function(coord1, coord2, color){
    this.params = [
        coord1,
        coord2,
        color
    ];
    this.draw = function(context){
        context.beginPath();
        var line = this.params;
        context.strokeStyle = line[2];//line[2] - цвет

        var p1 = line[0];
        var p2 = line[1];
        if(line[0][0] === line[1][0]){
            p1[0] -= 0.5;
            p2[0] -= 0.5;
        }

        if(line[0][1] === line[1][1]){
            p1[1] -= 0.5;
            p2[1] -= 0.5;
        }

        context.moveTo(p1[0], p1[1]);
        context.lineTo(p2[0], p2[1]);
        context.stroke();
    };
};



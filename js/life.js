var cv = new Canvas(document.getElementById('canvas_box'));

var draw = function(canv, field){
    canv.Clear();
    var qs = 4;
    var bs = 1;
    cv.Draw.Add((new FillQuad(0,0, 500, '#000000')));
    var grid = new Grid(qs, bs, '#005555');
    canv.Draw.Add(grid);

    for(y = 0; y < field.length; y++){
        for(x = 0; x < field[y].length; x++){
            if(field[y][x]) {
                cv.Draw.Add((new FillQuad(1 + (qs + bs) * x, 1 + (qs + bs) * y, qs, '#ffff00')));
            }
        }
    }
    cv.Draw.All();
};

var getField = function(w,h){
    var field = [];
    for(y = 0;y < h; y++){
        field.push([]);
        for(x=0;x<w;x++){
            field[y].push(0);
        }
    }
    return field;
};



var countAliveAround = function (field, x, y) {
    return field[y-1][x-1] + field[y][x-1] + field[y+1][x-1] +
            field[y-1][x] + field[y+1][x] +
            field[y-1][x+1] + field[y][x+1] + field[y+1][x+1];
};
var nextCellState =  function(field, x, y){
    var cnt = countAliveAround(field, x, y);
    if(cnt == 3){
        return 1;
    }
    if(cnt == 2 || cnt == 3){
        return field[y][x];
    }
    return 0;
};


var getNextStep = function(field){
    var tmpField = getField(field[0].length, field.length);
    for(y = 1; y < (field.length - 1); y++){
        for(x = 1; x < (field[y].length - 1);x++){
            tmpField[y][x] = nextCellState(field, x, y);
        }
    }
    return tmpField;
};

var reqAFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000/60);
        };
})();

var set = function (field, x, y, v) {
    field[y][x] = v;
    return field;
}

var sField = getField(100,100);

var ox = 30;
var oy = 30;

var arr = [
    [0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
];
for( i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++){
        sField[i+oy][j+ox] = arr[i][j];
    }
}

console.log(countAliveAround(sField, 10, 11));

draw(cv, sField);

setTimeout(function() {
    setInterval(function () {
        draw(cv, sField);
        sField = getNextStep(sField);
    }, 100);
},2000);

reqAFrame(function () {

});


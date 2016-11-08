var cv = new Canvas(document.getElementById('canvas_box'));
cv.Clear();



var grid = new Grid(8, 1, '#005555');
//cv.Draw.Add(grid);

var fq = new FillQuad(10,100, 40, '#ffff00');
//cv.Draw.Add(fq);


var l = new Line([10,10], [100,100], '#ffffff');
//var lineKey = cv.Draw.Add(l);
/*cv.Draw.Set(lineKey, [
    [200,200],
    [130, 300],
    '#ff0000'
]);*/

var r = new  Rect([100,100], [150,200], '#00ff00');
cv.Draw.Add(r);


var p = new Point([10,10], '#ff0000');
cv.Draw.Add(p);


cv.Draw.All();
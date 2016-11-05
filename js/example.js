var cv = new Canvas(document.getElementById('canvas_box'));
cv.Clear();



var grid = new Grid(5, 1, '#008888');
cv.Draw.Add.Item(grid);

var fq = new FillQuad(10,100, 40, '#ffff00');
cv.Draw.Add.Item(fq);


var l = new Line([10,10], [100,100], '#ffffff');
cv.Draw.Add.Item(l);


var r = new  Rect([100,100], [150,200], '#00ff00');
cv.Draw.Add.Item(r);
cv.Draw.All();



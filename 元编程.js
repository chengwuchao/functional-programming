function Point2D(x, y) {
  this._x = x;
  this._y = y;
}

function Point3D(x, y, z) {
  Point2D.call(this, x, y);
  this._z = z;
}

console.log(new Point2D(0, 1));
console.log(new Point3D(0, 1, 2));

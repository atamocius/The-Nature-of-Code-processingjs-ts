/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var Exercise_I_10_NoiseLandscape;
(function (Exercise_I_10_NoiseLandscape) {
    'use strict';
    var Landscape = (function () {
        function Landscape(p, scl, w, h) {
            // perlin noise argument
            this.zoff = 0.0;
            this.p = p;
            this.scl = scl;
            this.w = w;
            this.h = h;
            this.cols = w / scl;
            this.rows = h / scl;
            this.z = this.initializeArray2D(this.z, this.cols, this.rows, 0);
        }
        Landscape.prototype.initializeArray2D = function (arr, cols, rows, initValue) {
            arr = [];
            for (var i = 0; i < cols; i++) {
                arr.push([]);
                for (var j = 0; j < rows; j++) {
                    arr[i][j] = initValue;
                }
            }
            return arr;
        };
        // Calculate height values (based off a neural netork)
        Landscape.prototype.calculate = function () {
            var xoff = 0;
            for (var i = 0; i < this.cols; i++) {
                var yoff = 0;
                for (var j = 0; j < this.rows; j++) {
                    this.z[i][j] = this.p.map(this.p.noise(xoff, yoff, this.zoff), 0, 1, -120, 120);
                    yoff += 0.1;
                }
                xoff += 0.1;
            }
            this.zoff += 0.01;
        };
        // Render landscape as grid of quads
        Landscape.prototype.render = function () {
            for (var x = 0; x < this.z.length - 1; x++) {
                for (var y = 0; y < this.z[x].length - 1; y++) {
                    // one quad at a time
                    // each quad's color is determined by the height value at each vertex
                    // (clean this part up)
                    this.p.stroke(0);
                    this.p.fill(100, 100);
                    this.p.pushMatrix();
                    this.p.beginShape(this.p.QUADS);
                    this.p.translate(x * this.scl - this.w / 2, y * this.scl - this.h / 2, 0);
                    this.p.vertex(0, 0, this.z[x][y]);
                    this.p.vertex(this.scl, 0, this.z[x + 1][y]);
                    this.p.vertex(this.scl, this.scl, this.z[x + 1][y + 1]);
                    this.p.vertex(0, this.scl, this.z[x][y + 1]);
                    this.p.endShape();
                    this.p.popMatrix();
                }
            }
        };
        return Landscape;
    })();
    Exercise_I_10_NoiseLandscape.sketch = function (p) {
        var land;
        var theta = 0.0;
        p.setup = function () {
            p.size(800, 200, p.OPENGL);
            // Create a landscape object
            land = new Landscape(p, 20, 800, 400);
        };
        p.draw = function () {
            // Ok, visualize the landscape space
            p.background(255);
            p.pushMatrix();
            p.translate(p.width / 2, p.height / 2 + 20, -160);
            p.rotateX(p.PI / 3);
            p.rotateZ(theta);
            land.render();
            p.popMatrix();
            land.calculate();
            theta += 0.0025;
        };
    };
})(Exercise_I_10_NoiseLandscape || (Exercise_I_10_NoiseLandscape = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Exercise_I_10_NoiseLandscape.sketch);
//# sourceMappingURL=Sketch.js.map
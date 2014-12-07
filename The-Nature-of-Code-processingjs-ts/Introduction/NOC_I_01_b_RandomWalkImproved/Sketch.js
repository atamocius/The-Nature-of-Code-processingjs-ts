/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_01_b;
(function (NOC_I_01_b) {
    'use strict';
    var Walker = (function () {
        function Walker(p) {
            this.p = p;
            this.x = this.p.width / 2;
            this.y = this.p.height / 2;
        }
        Walker.prototype.display = function () {
            this.p.stroke(0);
            this.p.point(this.x, this.y);
        };
        Walker.prototype.step = function () {
            // Yields -1, 0, or 1
            //var stepx: number = this.p.floor(this.p.random(3)) - 1;
            //var stepy: number = this.p.floor(this.p.random(3)) - 1;
            // Yields any floating point number between -1.0 and 1.0
            var stepx = this.p.random(-1, 1);
            var stepy = this.p.random(-1, 1);
            this.x += stepx;
            this.y += stepy;
            this.x = this.p.constrain(this.x, 0, this.p.width - 1);
            this.y = this.p.constrain(this.y, 0, this.p.height - 1);
        };
        return Walker;
    })();
    NOC_I_01_b.sketch = function (p) {
        var walker;
        p.setup = function () {
            p.size(640, 360);
            walker = new Walker(p);
            p.background(255);
        };
        p.draw = function () {
            walker.step();
            walker.display();
        };
    };
})(NOC_I_01_b || (NOC_I_01_b = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_01_b.sketch);
//# sourceMappingURL=Sketch.js.map
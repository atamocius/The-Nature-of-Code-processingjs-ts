/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_05_c;
(function (NOC_I_05_c) {
    'use strict';
    var Walker = (function () {
        function Walker(p) {
            this.p = p;
            this.pos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.prevPos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
        }
        Walker.prototype.display = function () {
            this.p.stroke(0);
            this.p.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        };
        Walker.prototype.step = function () {
            this.prevPos.set(this.pos.x, this.pos.y);
            var stepSize = this.monteCarloModified() * 10;
            var xStep = this.p.random(-stepSize, stepSize);
            var yStep = this.p.random(-stepSize, stepSize);
            this.pos.x += xStep;
            this.pos.y += yStep;
            this.pos.x = this.p.constrain(this.pos.x, 0, this.p.width - 1);
            this.pos.y = this.p.constrain(this.pos.y, 0, this.p.height - 1);
        };
        Walker.prototype.monteCarloModified = function () {
            while (true) {
                var r1 = this.p.random(1);
                var probability = this.p.pow(r1, 2);
                var r2 = this.p.random(1);
                if (r2 < probability) {
                    return r1;
                }
            }
        };
        return Walker;
    })();
    NOC_I_05_c.sketch = function (p) {
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
})(NOC_I_05_c || (NOC_I_05_c = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_05_c.sketch);
//# sourceMappingURL=Sketch.js.map
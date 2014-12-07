/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_06_a;
(function (NOC_I_06_a) {
    'use strict';
    var Walker = (function () {
        function Walker(p) {
            this.p = p;
            this.pos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.nOff = new this.p.PVector(this.p.random(0), this.p.random(10000));
        }
        Walker.prototype.display = function () {
            this.p.strokeWeight(2);
            this.p.fill(51);
            this.p.stroke(0);
            this.p.ellipse(this.pos.x, this.pos.y, 48, 48);
        };
        Walker.prototype.step = function () {
            this.pos.x = this.p.map(this.p.noise(this.nOff.x), 0, 1, 0, this.p.width);
            this.pos.y = this.p.map(this.p.noise(this.nOff.y), 0, 1, 0, this.p.height);
            this.nOff.add(0.01, 0.01, 0);
        };
        return Walker;
    })();
    NOC_I_06_a.sketch = function (p) {
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
})(NOC_I_06_a || (NOC_I_06_a = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_06_a.sketch);
//# sourceMappingURL=Sketch.js.map
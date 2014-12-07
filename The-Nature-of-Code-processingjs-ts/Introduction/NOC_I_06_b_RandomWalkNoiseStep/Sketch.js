/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_06_b;
(function (NOC_I_06_b) {
    'use strict';
    var Walker = (function () {
        function Walker(p) {
            this.p = p;
            this.pos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.prevPos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.nOff = this.p.random(10000);
        }
        Walker.prototype.display = function () {
            this.p.stroke(0);
            this.p.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        };
        Walker.prototype.step = function () {
            this.prevPos.set(this.pos.x, this.pos.y);
            var maxStepSize = 20;
            var stepSize = this.p.map(this.p.noise(this.nOff), 0, 1, 0, maxStepSize);
            this.nOff += 0.01;
            // 0, 1, 2, or 3
            var choice = this.p.floor(this.p.random(4));
            if (choice === 0) {
                this.pos.x += stepSize;
            }
            else if (choice === 1) {
                this.pos.x -= stepSize;
            }
            else if (choice === 2) {
                this.pos.y += stepSize;
            }
            else {
                this.pos.y -= stepSize;
            }
            this.pos.x = this.p.constrain(this.pos.x, 0, this.p.width - 1);
            this.pos.y = this.p.constrain(this.pos.y, 0, this.p.height - 1);
        };
        return Walker;
    })();
    NOC_I_06_b.sketch = function (p) {
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
})(NOC_I_06_b || (NOC_I_06_b = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_06_b.sketch);
//# sourceMappingURL=Sketch.js.map
/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_03_b;
(function (NOC_I_03_b) {
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
            var r = this.p.random(1);
            // 50% chance to move in the direction of the mouse
            if (r < 0.5) {
                if (this.p.mouseX > this.x) {
                    this.x++;
                }
                else if (this.p.mouseX < this.x) {
                    this.x--;
                }
                if (this.p.mouseY > this.y) {
                    this.y++;
                }
                else if (this.p.mouseY < this.y) {
                    this.y--;
                }
            }
            else {
                var choice = this.p.floor(this.p.random(4));
                if (choice === 0) {
                    this.x++;
                }
                else if (choice === 1) {
                    this.x--;
                }
                else if (choice === 2) {
                    this.y++;
                }
                else {
                    this.y--;
                }
            }
            this.x = this.p.constrain(this.x, 0, this.p.width - 1);
            this.y = this.p.constrain(this.y, 0, this.p.height - 1);
        };
        return Walker;
    })();
    NOC_I_03_b.sketch = function (p) {
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
})(NOC_I_03_b || (NOC_I_03_b = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_03_b.sketch);
//# sourceMappingURL=Sketch.js.map
/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var Test1;
(function (Test1) {
    'use strict';
    var Test = (function () {
        function Test(p) {
            this.p = p;
        }
        Test.prototype.setup = function () {
            this.p.size(640, 480);
            this.p.background(255);
        };
        Test.prototype.draw = function () {
            if (this.p.mousePressed) {
                this.p.fill(0);
            }
            else {
                this.p.fill(255);
            }
            this.p.ellipse(this.p.mouseX, this.p.mouseY, 80, 80);
        };
        return Test;
    })();
    Test1.sketch = function (p) {
        var t;
        p.setup = function () {
            t = new Test(p);
            t.setup();
        };
        p.draw = function () {
            t.draw();
        };
    };
})(Test1 || (Test1 = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Test1.sketch);
//# sourceMappingURL=Sketch.js.map
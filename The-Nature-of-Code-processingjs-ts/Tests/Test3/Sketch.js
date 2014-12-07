/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var Test3;
(function (Test3) {
    'use strict';
    Test3.sketch = function (p) {
        p.setup = function () {
            p.size(200, 200, p.OPENGL);
            p.noStroke();
            p.background(50);
            p.lights();
            p.translate(p.width / 2 + 30, p.height / 2, 0);
            p.rotateX(-p.PI / 6);
            p.rotateY(p.PI / 3 + 210 / p.height * p.PI);
            p.box(45);
            p.translate(0, 0, -50);
            p.box(30);
        };
        p.draw = function () {
            return;
        };
    };
})(Test3 || (Test3 = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Test3.sketch);
//# sourceMappingURL=Sketch.js.map
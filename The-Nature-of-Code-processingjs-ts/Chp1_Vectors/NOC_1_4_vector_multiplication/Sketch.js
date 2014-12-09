/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_1_4_vector_multiplication;
(function (NOC_1_4_vector_multiplication) {
    'use strict';
    NOC_1_4_vector_multiplication.sketch = function (p) {
        p.setup = function () {
            p.size(640, 360);
            p.smooth();
        };
        p.draw = function () {
            p.background(255);
            var mouse = new PVector(p.mouseX, p.mouseY);
            var center = new PVector(p.width / 2, p.height / 2);
            mouse.sub(center);
            // Multiplying a vector! The vector is now half its original size (multiplied by 0.5).
            mouse.mult(0.5);
            p.translate(p.width / 2, p.height / 2);
            p.strokeWeight(2);
            p.stroke(0);
            p.line(0, 0, mouse.x, mouse.y);
        };
    };
})(NOC_1_4_vector_multiplication || (NOC_1_4_vector_multiplication = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_4_vector_multiplication.sketch);
//# sourceMappingURL=Sketch.js.map
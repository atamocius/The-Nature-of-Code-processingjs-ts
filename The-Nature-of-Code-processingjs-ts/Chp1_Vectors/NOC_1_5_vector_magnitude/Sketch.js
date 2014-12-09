/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_1_5_vector_magnitude;
(function (NOC_1_5_vector_magnitude) {
    'use strict';
    NOC_1_5_vector_magnitude.sketch = function (p) {
        p.setup = function () {
            p.size(640, 360);
        };
        p.draw = function () {
            p.background(255);
            var mouse = new PVector(p.mouseX, p.mouseY);
            var center = new PVector(p.width / 2, p.height / 2);
            mouse.sub(center);
            var m = mouse.mag();
            p.fill(0);
            p.noStroke();
            p.rect(0, 0, m, 10);
            p.translate(p.width / 2, p.height / 2);
            p.strokeWeight(2);
            p.stroke(0);
            p.line(0, 0, mouse.x, mouse.y);
        };
    };
})(NOC_1_5_vector_magnitude || (NOC_1_5_vector_magnitude = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_5_vector_magnitude.sketch);
//# sourceMappingURL=Sketch.js.map
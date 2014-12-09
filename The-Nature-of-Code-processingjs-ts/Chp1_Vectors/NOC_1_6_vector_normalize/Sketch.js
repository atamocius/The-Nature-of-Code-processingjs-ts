/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.sketch = function ($p) {
        $p.setup = function () {
            $p.size(640, 360);
        };
        $p.draw = function () {
            $p.background(255);
            // A vector that points to the mouse location
            var mouse = new PVector($p.mouseX, $p.mouseY);
            // A vector that points to the center of the window
            var center = new PVector($p.width / 2, $p.height / 2);
            // Subtract center from mouse which results in a vector that points from center to mouse
            mouse.sub(center);
            // Normalize the vector
            mouse.normalize();
            // Multiply its length by 50
            mouse.mult(150);
            $p.translate($p.width / 2, $p.height / 2);
            // Draw the resulting vector
            $p.strokeWeight(2);
            $p.stroke(0);
            $p.line(0, 0, mouse.x, mouse.y);
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
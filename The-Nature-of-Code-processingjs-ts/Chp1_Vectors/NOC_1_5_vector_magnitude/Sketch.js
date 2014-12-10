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
            var mouse = new PVector($p.mouseX, $p.mouseY);
            var center = new PVector($p.width / 2, $p.height / 2);
            mouse.sub(center);
            var m = mouse.mag();
            $p.fill(0);
            $p.noStroke();
            $p.rect(0, 0, m, 10);
            $p.translate($p.width / 2, $p.height / 2);
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
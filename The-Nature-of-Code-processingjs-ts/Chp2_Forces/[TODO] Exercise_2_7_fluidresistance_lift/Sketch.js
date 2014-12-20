/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.sketch = function ($p) {
        var reset = function () {
        };
        $p.setup = function () {
            $p.size(640, 360);
            reset();
        };
        $p.draw = function () {
            $p.background(255);
            $p.fill(0);
            $p.text('click mouse to reset', 10, 30);
        };
        $p.mousePressed = function () {
            reset();
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
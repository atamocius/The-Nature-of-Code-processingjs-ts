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
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
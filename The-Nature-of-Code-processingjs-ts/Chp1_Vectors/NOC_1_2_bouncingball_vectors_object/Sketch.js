/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Ball'], function (require, exports, Ball) {
    'use strict';
    exports.sketch = function ($p) {
        var b;
        $p.setup = function () {
            $p.size(200, 200);
            b = new Ball($p);
        };
        $p.draw = function () {
            $p.background(255);
            b.update();
            b.display();
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
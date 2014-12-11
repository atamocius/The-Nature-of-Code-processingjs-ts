/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover'], function (require, exports, Mover) {
    'use strict';
    exports.sketch = function ($p) {
        var mover;
        $p.setup = function () {
            $p.size(640, 360);
            mover = new Mover($p);
        };
        $p.draw = function () {
            $p.background(255);
            mover.update();
            mover.checkEdges();
            mover.display();
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
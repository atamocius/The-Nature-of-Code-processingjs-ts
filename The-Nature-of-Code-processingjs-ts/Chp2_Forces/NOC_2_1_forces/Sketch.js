/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover'], function (require, exports, Mover) {
    'use strict';
    exports.sketch = function ($p) {
        var m;
        $p.setup = function () {
            $p.size(640, 360);
            m = new Mover($p);
        };
        $p.draw = function () {
            $p.background(255);
            var wind = new PVector(0.01, 0);
            var gravity = new PVector(0, 0.1);
            m.applyForce(wind);
            m.applyForce(gravity);
            m.update();
            m.display();
            m.checkEdges();
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
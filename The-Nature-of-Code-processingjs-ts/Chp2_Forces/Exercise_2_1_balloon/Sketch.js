/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover'], function (require, exports, Mover) {
    'use strict';
    exports.sketch = function ($p) {
        var m;
        var t;
        $p.setup = function () {
            $p.size(640, 360);
            m = new Mover($p);
            t = new PVector(100, 1000);
        };
        $p.draw = function () {
            $p.background(255);
            var wind = new PVector($p.map($p.noise(t.x), 0, 1, -0.2, 0.2), 0);
            t.add(0.01, 0.01);
            var gravity = new PVector(0, 0.1);
            var buoyancy = new PVector(0, -0.3);
            m.applyForce(wind);
            m.applyForce(gravity);
            m.applyForce(buoyancy);
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
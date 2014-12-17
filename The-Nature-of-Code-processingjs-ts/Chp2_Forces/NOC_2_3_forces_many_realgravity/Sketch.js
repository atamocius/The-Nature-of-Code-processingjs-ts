/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover'], function (require, exports, Mover) {
    'use strict';
    exports.sketch = function ($p) {
        var movers = new Array(20);
        $p.setup = function () {
            $p.size(640, 360);
            for (var i = 0; i < movers.length; i++) {
                movers[i] = new Mover($p, $p.random(0.1, 4), 0, 0);
            }
        };
        $p.draw = function () {
            $p.background(255);
            for (var i = 0; i < movers.length; i++) {
                var wind = new PVector(0.01, 0);
                var gravity = new PVector(0, 0.1 * movers[i].mass);
                movers[i].applyForce(wind);
                movers[i].applyForce(gravity);
                movers[i].update();
                movers[i].display();
                movers[i].checkEdges();
            }
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
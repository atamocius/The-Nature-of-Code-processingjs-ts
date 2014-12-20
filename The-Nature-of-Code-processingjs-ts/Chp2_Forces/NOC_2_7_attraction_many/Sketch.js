/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover', 'Attractor'], function (require, exports, Mover, Attractor) {
    'use strict';
    exports.sketch = function ($p) {
        var movers = new Array(10);
        var a;
        $p.setup = function () {
            $p.size(640, 360);
            for (var i = 0; i < movers.length; i++) {
                movers[i] = new Mover($p, $p.random(0.1, 2), $p.random($p.width), $p.random($p.height));
            }
            a = new Attractor($p);
        };
        $p.draw = function () {
            $p.background(255);
            a.display();
            a.drag();
            a.hover($p.mouseX, $p.mouseY);
            for (var i = 0; i < movers.length; i++) {
                var force = a.attract(movers[i]);
                movers[i].applyForce(force);
                movers[i].update();
                movers[i].display();
            }
        };
        $p.mousePressed = function () {
            a.clicked($p.mouseX, $p.mouseY);
        };
        $p.mouseReleased = function () {
            a.stopDragging();
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover', 'Attractor'], function (require, exports, Mover, Attractor) {
    'use strict';
    exports.sketch = function ($p) {
        var m;
        var a;
        $p.setup = function () {
            $p.size(640, 360);
            m = new Mover($p);
            a = new Attractor($p);
        };
        $p.draw = function () {
            $p.background(255);
            var force = a.attract(m);
            m.applyForce(force);
            m.update();
            a.drag();
            a.hover($p.mouseX, $p.mouseY);
            a.display();
            m.display();
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
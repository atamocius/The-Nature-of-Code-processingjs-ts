/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Ball', 'Box'], function (require, exports, Ball, Box) {
    'use strict';
    exports.sketch = function ($p) {
        var ball;
        var box;
        $p.setup = function () {
            $p.size(400, 400, $p.OPENGL);
            $p.frameRate(50);
            ball = new Ball($p);
            box = new Box($p);
        };
        $p.draw = function () {
            $p.background(230);
            $p.camera($p.width / 2.0 + 400, $p.height / 2.0 - 400, 700, $p.width / 2.0, $p.height / 2.0, 0.0, 0.0, 1.0, 0.0);
            $p.directionalLight(126, 126, 126, -0.333, 0.667, -0.667);
            $p.ambientLight(120, 120, 120);
            box.update();
            ball.update();
            box.display();
            ball.display();
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
/// <reference path="../../scripts/typings/processing.d.ts" />
/// <reference path="ball.ts" />
/// <reference path="box.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var Exercise_1_3_bouncingball_3D;
(function (Exercise_1_3_bouncingball_3D) {
    'use strict';
    Exercise_1_3_bouncingball_3D.sketch = function (p) {
        var ball;
        var box;
        p.setup = function () {
            p.size(400, 400, p.OPENGL);
            p.frameRate(50);
            ball = new Exercise_1_3_bouncingball_3D.Ball(p);
            box = new Exercise_1_3_bouncingball_3D.Box(p);
        };
        p.draw = function () {
            p.background(230);
            p.camera(p.width / 2.0 + 400, p.height / 2.0 - 400, 700, p.width / 2.0, p.height / 2.0, 0.0, 0.0, 1.0, 0.0);
            p.directionalLight(126, 126, 126, -0.333, 0.667, -0.667);
            p.ambientLight(120, 120, 120);
            box.update();
            ball.update();
            box.display();
            ball.display();
        };
    };
})(Exercise_1_3_bouncingball_3D || (Exercise_1_3_bouncingball_3D = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Exercise_1_3_bouncingball_3D.sketch);
//# sourceMappingURL=Sketch.js.map
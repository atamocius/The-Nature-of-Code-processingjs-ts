/// <reference path="../../scripts/typings/processing.d.ts" />
/// <reference path="ball.ts" />
/// <reference path="box.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module Exercise_1_3_bouncingball_3D {
    'use strict';

    export var sketch = (p: Processing) => {

        var ball: Ball;
        var box: Box;

        p.setup = () => {
            p.size(400, 400, p.OPENGL);
            p.frameRate(50);

            ball = new Ball(p);
            box = new Box(p);
        };

        p.draw = () => {
            p.background(230);
            p.camera(
                p.width / 2.0 + 400, p.height / 2.0 - 400, 700,
                p.width / 2.0, p.height / 2.0, 0.0,
                0.0, 1.0, 0.0);

            p.directionalLight(126, 126, 126, -0.333, 0.667, -0.667);
            p.ambientLight(120, 120, 120);

            box.update();
            ball.update();

            box.display();
            ball.display();
        };
    };
}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Exercise_1_3_bouncingball_3D.sketch);

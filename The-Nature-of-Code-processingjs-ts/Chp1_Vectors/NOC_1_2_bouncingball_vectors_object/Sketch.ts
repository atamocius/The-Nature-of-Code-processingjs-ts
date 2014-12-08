/// <reference path="../../scripts/typings/processing.d.ts" />
/// <reference path="ball.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_1_2_bouncingball_vectors_object {
    'use strict';

    export var sketch = (p: Processing) => {

        var b: Ball;

        p.setup = () => {
            p.size(200, 200);
            b = new Ball(p);
        };

        p.draw = () => {
            p.background(255);
            b.update();
            b.display();
        };
    };
}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_2_bouncingball_vectors_object.sketch);

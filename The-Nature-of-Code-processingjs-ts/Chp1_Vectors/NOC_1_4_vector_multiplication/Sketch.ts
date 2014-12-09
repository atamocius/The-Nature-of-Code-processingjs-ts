/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_1_4_vector_multiplication {
    'use strict';

    export var sketch = (p: Processing) => {

        p.setup = () => {
            p.size(640, 360);
            p.smooth();
        };

        p.draw = () => {
            p.background(255);

            var mouse: PVector = new PVector(p.mouseX, p.mouseY);
            var center: PVector = new PVector(p.width / 2, p.height / 2);
            mouse.sub(center);

            // Multiplying a vector! The vector is now half its original size (multiplied by 0.5).
            mouse.mult(0.5);

            p.translate(p.width / 2, p.height / 2);
            p.strokeWeight(2);
            p.stroke(0);
            p.line(0, 0, mouse.x, mouse.y);
        };
    };
}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_4_vector_multiplication.sketch);

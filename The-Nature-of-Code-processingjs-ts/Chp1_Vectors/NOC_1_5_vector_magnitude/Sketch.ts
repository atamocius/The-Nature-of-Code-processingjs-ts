/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_1_5_vector_magnitude {
    'use strict';

    export var sketch = (p: Processing) => {

        p.setup = () => {
            p.size(640, 360);
        };

        p.draw = () => {
            p.background(255);

            var mouse: PVector = new PVector(p.mouseX, p.mouseY);
            var center: PVector = new PVector(p.width / 2, p.height / 2);
            mouse.sub(center);

            var m: number = mouse.mag();
            p.fill(0);
            p.noStroke();
            p.rect(0, 0, m, 10);

            p.translate(p.width / 2, p.height / 2);
            p.strokeWeight(2);
            p.stroke(0);
            p.line(0, 0, mouse.x, mouse.y);
        };
    };
}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_5_vector_magnitude.sketch);

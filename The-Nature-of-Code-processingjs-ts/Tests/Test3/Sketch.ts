/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module Test3 {
    'use strict';

    export var sketch = function (p: any): void {

        p.setup = () => {
            p.size(200, 200, p.OPENGL);
            p.noStroke();
            p.background(50);
            p.lights();
            p.translate(p.width / 2 + 30, p.height / 2, 0);
            p.rotateX(-p.PI / 6);
            p.rotateY(p.PI / 3 + 210 / p.height * p.PI);
            p.box(45);
            p.translate(0, 0, -50);
            p.box(30);
        };

        p.draw = () => {
            return;
        };
    };
}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Test3.sketch);

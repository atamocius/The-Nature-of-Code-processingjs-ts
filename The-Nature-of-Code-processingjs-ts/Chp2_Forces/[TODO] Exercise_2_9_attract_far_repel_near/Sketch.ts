/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

'use strict';

export var sketch = ($p: Processing) => {

    var reset = () => {
    };

    $p.setup = () => {
        $p.size(640, 360);
        reset();
    };

    $p.draw = () => {
        $p.background(255);


        $p.fill(0);
        $p.text('click mouse to reset', 10, 30);
    };

    $p.mousePressed = () => {
        reset();
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

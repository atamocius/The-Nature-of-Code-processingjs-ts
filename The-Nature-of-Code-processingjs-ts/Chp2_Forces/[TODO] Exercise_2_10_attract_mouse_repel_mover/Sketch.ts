/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

'use strict';

export var sketch = ($p: Processing) => {

    $p.setup = () => {
        $p.size(640, 360);
    };

    $p.draw = () => {
        $p.background(255);
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Ball = require('Ball');

'use strict';

export var sketch = ($p: Processing) => {

    var b: Ball;

    $p.setup = () => {
        $p.size(200, 200);
        b = new Ball($p);
    };

    $p.draw = () => {
        $p.background(255);
        b.update();
        b.display();
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

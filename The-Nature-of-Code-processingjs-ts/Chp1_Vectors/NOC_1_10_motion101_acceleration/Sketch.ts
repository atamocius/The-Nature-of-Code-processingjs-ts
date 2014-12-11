/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Mover = require('Mover');

'use strict';

export var sketch = ($p: Processing) => {

    var mover: Mover;

    $p.setup = () => {
        $p.size(640, 360);
        mover = new Mover($p);
    };

    $p.draw = () => {
        $p.background(255);

        // Update the location
        mover.update();
        // Display the Mover
        mover.display();
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Mover = require('Mover');

'use strict';

export var sketch = ($p: Processing) => {

    var m: Mover;

    $p.setup = () => {
        $p.size(640, 360);
        m = new Mover($p);
    };

    $p.draw = () => {
        $p.background(255);

        var wind: PVector = new PVector(0.01, 0);
        var gravity: PVector = new PVector(0, 0.1);
        m.applyForce(wind);
        m.applyForce(gravity);

        m.update();
        m.display();
        m.checkEdges();
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

// Demonstration of the basics of motion with vector.
// A "Mover" object stores location, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

import Mover = require('Mover');

'use strict';

export var sketch = ($p: Processing) => {

    var movers: Mover[] = new Array<Mover>(20);

    $p.setup = () => {
        $p.size(640, 360);
        for (var i: number = 0; i < movers.length; i++) {
            movers[i] = new Mover($p);
        }
    };

    $p.draw = () => {
        $p.background(255);

        for (var i: number = 0; i < movers.length; i++) {
            movers[i].update();
            movers[i].display();
        }
    };

};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

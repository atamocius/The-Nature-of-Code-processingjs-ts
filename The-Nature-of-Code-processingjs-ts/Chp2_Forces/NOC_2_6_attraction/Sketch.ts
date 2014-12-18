/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

// Forces (Gravity and Fluid Resistence) with Vectors

// Demonstration of multiple force acting on bodies (Mover class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

import Mover = require('Mover');
import Attractor = require('Attractor');

'use strict';

export var sketch = ($p: Processing) => {

    var m: Mover;
    var a: Attractor;

    $p.setup = () => {
        $p.size(640, 360);
        m = new Mover($p);
        a = new Attractor($p);
    };

    $p.draw = () => {
        $p.background(255);

        var force: PVector = a.attract(m);
        m.applyForce(force);
        m.update();

        a.drag();
        a.hover($p.mouseX, $p.mouseY);

        a.display();
        m.display();
    };

    $p.mousePressed = () => {
        a.clicked($p.mouseX, $p.mouseY); 
    };

    $p.mouseReleased = () => {
        a.stopDragging(); 
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

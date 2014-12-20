/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Mover = require('Mover');
import Attractor = require('Attractor');

'use strict';

export var sketch = ($p: Processing) => {

    var movers: Mover[] = new Array<Mover>(10);
    var a: Attractor;

    $p.setup = () => {
        $p.size(640, 360);
        for (var i: number = 0; i < movers.length; i++) {
            movers[i] = new Mover($p, $p.random(0.1, 2), $p.random($p.width), $p.random($p.height));
        }
        a = new Attractor($p);
    };

    $p.draw = () => {
        $p.background(255);

        a.display();
        a.drag();
        a.hover($p.mouseX, $p.mouseY);

        for (var i: number = 0; i < movers.length; i++) {
            var force: PVector = a.attract(movers[i]);
            movers[i].applyForce(force);

            movers[i].update();
            movers[i].display();
        }
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

/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Mover = require('Mover');

'use strict';

export var sketch = ($p: Processing) => {

    var movers: Mover[] = new Array<Mover>(20);

    $p.setup = () => {
        $p.size(640, 360);
        for (var i: number = 0; i < movers.length; i++) {
            movers[i] = new Mover($p, $p.random(0.1, 4), 0, 0);
        }
    };

    $p.draw = () => {
        $p.background(255);

        for (var i: number = 0; i < movers.length; i++) {
            var wind: PVector = new PVector(0.01, 0);
            var gravity: PVector = new PVector(0, 0.1);

            movers[i].applyForce(wind);
            movers[i].applyForce(gravity);

            movers[i].update();
            movers[i].display();
            movers[i].checkEdges();
        }
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Mover = require('Mover');

'use strict';

export var sketch = ($p: Processing) => {

    var m: Mover;
    var t: PVector;

    $p.setup = () => {
        $p.size(640, 360);
        m = new Mover($p);
        t = new PVector(100, 1000);
    };

    $p.draw = () => {
        $p.background(255);

        var wind: PVector = new PVector(
            $p.map($p.noise(t.x), 0, 1, -0.2, 0.2),
            0);

        t.add(0.01, 0.01);

        var gravity: PVector = new PVector(0, 0.1);
        var buoyancy: PVector = new PVector(0, -0.3);
        m.applyForce(wind);
        m.applyForce(gravity);
        m.applyForce(buoyancy);

        m.update();
        m.display();
        m.checkEdges();
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

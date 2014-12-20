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
            movers[i] = new Mover($p, $p.random(0.1, 2), $p.random($p.width), $p.random($p.height));
        }
    };

    $p.draw = () => {
        $p.background(255);

        for (var i: number = 0; i < movers.length; i++) {
            for (var j: number = 0; j < movers.length; j++) {
                if (i !== j) {
                    var force: PVector = movers[j].attract(movers[i]);
                    movers[i].applyForce(force);
                }
            }

            movers[i].update();
            movers[i].display();
        }
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

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
            movers[i] = new Mover($p, $p.random(0.1, 4), $p.width / 2, 0);
        }
    };

    $p.draw = () => {
        $p.background(255);

        for (var i: number = 0; i < movers.length; i++) {
            var wind: PVector = new PVector(0.1, 0);
            var gravity: PVector = new PVector(0, 0.1);

            var rightMag: number = movers[i].location.x;
            var rightRepell: PVector = new PVector(-rightMag * 0.00003, 0);

            var leftMag: number = $p.width - movers[i].location.x;
            var leftRepell: PVector = new PVector(leftMag * 0.00003, 0);

            var topMag: number = $p.height - movers[i].location.y;
            var topRepell: PVector = new PVector(0, topMag * 0.00003);

            var bottomMag: number = movers[i].location.y;
            var bottomRepell: PVector = new PVector(0, -bottomMag * 0.0006);

            if ($p.__keyPressed === true) {
                movers[i].applyForce(wind);
            }
            movers[i].applyForce(gravity);

            movers[i].applyForce(rightRepell);
            movers[i].applyForce(leftRepell);
            movers[i].applyForce(topRepell);
            movers[i].applyForce(bottomRepell);

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

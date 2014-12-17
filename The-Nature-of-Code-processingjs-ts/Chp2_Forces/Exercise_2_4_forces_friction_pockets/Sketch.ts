/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Mover = require('Mover');

'use strict';

export var sketch = ($p: Processing) => {

    var movers: Mover[] = new Array<Mover>(5);

    $p.setup = () => {
        $p.size(383, 200);
        //$p.randomSeed(1);
        for (var i: number = 0; i < movers.length; i++) {
            movers[i] = new Mover($p, $p.random(1, 4), $p.random($p.width), 0);
        }
    };

    var createFriction = (c: number, velocity: PVector): PVector => {
        var friction: PVector = velocity.get();
        friction.mult(-1);
        friction.normalize();
        friction.mult(c);

        return friction;
    };

    var drawPocket = (x: number, y: number, radius: number): void => {
        $p.stroke(0);
        $p.strokeWeight(1);
        $p.noFill();
        $p.ellipse(x, y, radius * 2, radius * 2);
    };

    var applyPocketFriction = (m: Mover, c: number, x: number, y: number, radius: number) => {
        var distance: number = $p.dist(x, y, m.location.x, m.location.y);

        if (distance <= radius) {
            // apply force if inside the pocket
            var friction: PVector = createFriction(c, m.velocity.get());
            m.applyForce(friction);
        }
    };

    $p.draw = () => {
        $p.background(255);

        drawPocket(80, 80, 40);
        drawPocket(200, 130, 50);
        drawPocket(310, 80, 30);

        for (var i: number = 0; i < movers.length; i++) {
            var wind: PVector = new PVector(0.01, 0);
            var gravity: PVector = new PVector(0, 0.1 * movers[i].mass);

            var friction: PVector = createFriction(0.05, movers[i].velocity.get());

            applyPocketFriction(movers[i], -0.5, 80, 80, 40);
            applyPocketFriction(movers[i], 0.05, 200, 130, 50);
            applyPocketFriction(movers[i], 0.7, 310, 80, 30);

            //movers[i].applyForce(friction);
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

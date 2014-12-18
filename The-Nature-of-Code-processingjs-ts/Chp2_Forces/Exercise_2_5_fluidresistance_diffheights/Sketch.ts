/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

// Forces (Gravity and Fluid Resistence) with Vectors

// Demonstration of multiple force acting on bodies (Mover class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

import Mover = require('Mover');
import Liquid = require('Liquid');

'use strict';

export var sketch = ($p: Processing) => {

    // Moving bodies
    var movers: Mover[] = new Array<Mover>(9);

    // Liquid
    var liquid: Liquid;

    // Restart all the Mover objects randomly
    var reset = () => {
        for (var i: number = 0; i < movers.length; i++) {
            movers[i] = new Mover($p, $p.random(0.5, 3), 40 + i * 70, $p.random(0, 70));
        }
    };

    $p.setup = () => {
        $p.size(640, 360);
        reset();
        // Create liquid object
        liquid = new Liquid($p, 0, $p.height / 2, $p.width, $p.height / 2, 0.1);
    };

    $p.draw = () => {
        $p.background(255);

        // Draw water
        liquid.display();

        for (var i: number = 0; i < movers.length; i++) {

            // Is the Mover in the liquid?
            if (liquid.contains(movers[i])) {
                // Calculate drag force
                var dragForce: PVector = liquid.drag(movers[i]);
                // Apply drag force to Mover
                movers[i].applyForce(dragForce);
            }

            // Gravity is scaled by mass here!
            var gravity: PVector = new PVector(0, 0.1 * movers[i].mass);
            // Apply gravity
            movers[i].applyForce(gravity);

            // Update and display
            movers[i].update();
            movers[i].display();
            movers[i].checkEdges();
        }

        $p.fill(0);
        $p.text('click mouse to reset', 10, 30);
    };

    $p.mousePressed = () => {
        reset();
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

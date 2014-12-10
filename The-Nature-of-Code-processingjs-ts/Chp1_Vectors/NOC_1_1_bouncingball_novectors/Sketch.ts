/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

'use strict';

export var sketch = ($p: Processing) => {

    var x: number = 100;
    var y: number = 100;
    var xspeed: number = 2.5;
    var yspeed: number = 2;

    $p.setup = () => {
        $p.size(800, 200);
        // smooth() does not really do anything in processingjs:
        // HTML5 canvas always renders in smooth mode
        $p.smooth();
    };

    $p.draw = () => {
        $p.background(255);

        // Add the current speed to the location.
        x = x + xspeed;
        y = y + yspeed;

        if ((x > $p.width) || (x < 0)) {
            xspeed = xspeed * -1;
        }
        if ((y > $p.height) || (y < 0)) {
            yspeed = yspeed * -1;
        }

        // Display circle at x location
        $p.stroke(0);
        $p.strokeWeight(2);
        $p.fill(127);
        $p.ellipse(x, y, 48, 48);
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

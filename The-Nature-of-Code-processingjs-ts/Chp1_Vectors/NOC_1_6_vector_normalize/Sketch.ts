/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

'use strict';

export var sketch = ($p: Processing) => {

    $p.setup = () => {
        $p.size(640, 360);
    };

    $p.draw = () => {
        $p.background(255);

        // A vector that points to the mouse location
        var mouse: PVector = new PVector($p.mouseX, $p.mouseY);
        // A vector that points to the center of the window
        var center: PVector = new PVector($p.width / 2, $p.height / 2);
        // Subtract center from mouse which results in a vector that points from center to mouse
        mouse.sub(center);

        // Normalize the vector
        mouse.normalize();

        // Multiply its length by 50
        mouse.mult(150);

        $p.translate($p.width / 2, $p.height / 2);
        // Draw the resulting vector
        $p.strokeWeight(2);
        $p.stroke(0);
        $p.line(0, 0, mouse.x, mouse.y);
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

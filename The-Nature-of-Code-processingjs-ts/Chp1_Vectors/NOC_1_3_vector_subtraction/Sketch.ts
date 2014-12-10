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

        var mouse: PVector = new PVector($p.mouseX, $p.mouseY);
        var center: PVector = new PVector($p.width / 2, $p.height / 2);
        mouse.sub(center);

        $p.translate($p.width / 2, $p.height / 2);
        $p.strokeWeight(2);
        $p.stroke(0);
        $p.line(0, 0, mouse.x, mouse.y);
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};

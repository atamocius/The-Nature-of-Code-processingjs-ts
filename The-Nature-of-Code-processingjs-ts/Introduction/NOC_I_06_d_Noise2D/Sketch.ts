/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_d {
    'use strict';

    export var sketch = function (p: any): void {

        var xOff: number = 0;
        var yOff: number = 0;
        var xIncrement: number = 0.01;
        var yIncrement: number = 0.01;

        p.setup = () => {
            p.size(640, 360);
            p.background(0);
            p.noStroke();

            // Optional: adjust noise detail here
            p.noiseDetail(8, 0.65);

            p.loadPixels();
            // For every x,y coordinate in a 2D space, calculate a noise value and produce a brightness value
            // Start xoff at 0.
            xOff = 0;
            for (var x: number = 0; x < p.width; x++) {
                // For every xoff, start yoff at 0.
                yOff = 0;
                for (var y: number = 0; y < p.height; y++) {
                    // Use xoff and yoff for noise().
                    //var bright: number = p.random(0, 255);
                    var bright: number = p.map(p.noise(xOff, yOff), 0, 1, 0, 255);
                    // Use x and y for pixel location.
                    var c = p.color(bright);
                    //p.set(x, y, c);
                    p.pixels.setPixel(y * p.width + x, c);

                    // Increment yoff.
                    yOff += yIncrement;
                }
                // Increment xoff.
                xOff += xIncrement;
            }
            p.updatePixels();
        };

        p.draw = () => {
            return;
        };
    };

}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_06_d.sketch);

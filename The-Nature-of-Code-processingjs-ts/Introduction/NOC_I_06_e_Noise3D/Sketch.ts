/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_e {
    'use strict';

    export var sketch = function (p: any): void {

        var xOff: number = 0;
        var yOff: number = 0;
        var zOff: number = 0; // The noise function's 3rd argument, a global variable that increments once per cycle
        var xIncrement: number = 0.01;
        var yIncrement: number = 0.01;
        var zIncrement: number = 0.02;

        p.setup = () => {
            p.size(200, 200);
            p.background(0);
            p.noStroke();

            // Since the frametakes a lot longer to process, might as well
            // cap the framerate
            p.frameRate(1);
        };

        p.draw = () => {
            p.background(0);

            // Optional: adjust noise detail here
            //p.noiseDetail(8, 0.65);

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
                    var bright: number = p.map(p.noise(xOff, yOff, zOff), 0, 1, 0, 255);
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

            zOff += zIncrement;
        };
    };

}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_06_e.sketch);

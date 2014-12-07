/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_04_a {
    'use strict';

    export var sketch = function (p: any): void {

        p.setup = () => {
            p.size(640, 360);
            p.background(255);
        };

        p.draw = () => {
            // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
            var xloc: number = p.randomGaussian();

            var sd: number = 60;                    // Define a standard deviation
            var mean: number = p.width / 2;         // Define a mean value (middle of the screen along the x-axis)
            xloc = (xloc * sd) + mean;              // Scale the gaussian random number by standard deviation and mean

            p.fill(0, 10);
            p.noStroke();
            p.ellipse(xloc, p.height / 2, 16, 16);  // Draw an ellipse at our "normal" random position
        };
    };

}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_04_a.sketch);

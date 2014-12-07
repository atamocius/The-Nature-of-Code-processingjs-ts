/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_06_d;
(function (NOC_I_06_d) {
    'use strict';
    NOC_I_06_d.sketch = function (p) {
        var xOff = 0;
        var yOff = 0;
        var xIncrement = 0.01;
        var yIncrement = 0.01;
        p.setup = function () {
            p.size(640, 360);
            p.background(0);
            p.noStroke();
            p.loadPixels();
            // Start xoff at 0.
            xOff = 0;
            for (var x = 0; x < p.width; x++) {
                // For every xoff, start yoff at 0.
                yOff = 0;
                for (var y = 0; y < p.height; y++) {
                    // Use xoff and yoff for noise().
                    //var bright: number = p.random(0, 255);
                    var bright = p.map(p.noise(xOff, yOff), 0, 1, 0, 255);
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
        p.draw = function () {
            return;
        };
    };
})(NOC_I_06_d || (NOC_I_06_d = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_06_d.sketch);
//# sourceMappingURL=Sketch.js.map
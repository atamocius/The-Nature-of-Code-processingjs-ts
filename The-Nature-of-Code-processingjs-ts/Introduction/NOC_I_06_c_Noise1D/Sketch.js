/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_06_c;
(function (NOC_I_06_c) {
    'use strict';
    NOC_I_06_c.sketch = function (p) {
        var xOff = 0;
        var xIncrement = 0.01;
        p.setup = function () {
            p.size(640, 360);
            p.background(0);
            p.noStroke();
        };
        p.draw = function () {
            p.fill(0, 10);
            p.rect(0, 0, p.width, p.height);
            //var n: number = s.random(0,width);  // Try this line instead of noise
            // Get a noise value based on xoff and scale it according to the window's width
            var n = p.noise(xOff);
            var x = p.map(n, 0, 1, 0, p.width);
            // With each cycle, increment xoff
            xOff += xIncrement;
            // Draw the ellipse at the value produced by perlin noise
            p.fill(200);
            p.ellipse(x, p.height / 2, 64, 64);
            p.println(n);
        };
    };
})(NOC_I_06_c || (NOC_I_06_c = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_06_c.sketch);
//# sourceMappingURL=Sketch.js.map
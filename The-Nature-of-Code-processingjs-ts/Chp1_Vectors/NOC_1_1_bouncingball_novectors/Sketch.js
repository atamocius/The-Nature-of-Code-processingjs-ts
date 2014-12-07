/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_1_1_bouncingball_novectors;
(function (NOC_1_1_bouncingball_novectors) {
    'use strict';
    NOC_1_1_bouncingball_novectors.sketch = function (p) {
        var x = 100;
        var y = 100;
        var xspeed = 2.5;
        var yspeed = 2;
        p.setup = function () {
            p.size(800, 200);
            // smooth() does not really do anything in processingjs:
            // HTML5 canvas always renders in smooth mode
            p.smooth();
        };
        p.draw = function () {
            p.background(255);
            // Add the current speed to the location.
            x = x + xspeed;
            y = y + yspeed;
            if ((x > p.width) || (x < 0)) {
                xspeed = xspeed * -1;
            }
            if ((y > p.height) || (y < 0)) {
                yspeed = yspeed * -1;
            }
            // Display circle at x location
            p.stroke(0);
            p.strokeWeight(2);
            p.fill(127);
            p.ellipse(x, y, 48, 48);
        };
    };
})(NOC_1_1_bouncingball_novectors || (NOC_1_1_bouncingball_novectors = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_1_bouncingball_novectors.sketch);
//# sourceMappingURL=Sketch.js.map
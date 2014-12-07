/// <reference path="../../scripts/typings/processing.d.ts" />
/// <reference path="landscape.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var Exercise_I_10_NoiseLandscape;
(function (Exercise_I_10_NoiseLandscape) {
    'use strict';
    Exercise_I_10_NoiseLandscape.sketch = function (p) {
        var land;
        var theta = 0.0;
        p.setup = function () {
            p.size(800, 200, p.OPENGL);
            // Create a landscape object
            land = new Exercise_I_10_NoiseLandscape.Landscape(p, 20, 800, 400);
        };
        p.draw = function () {
            // Ok, visualize the landscape space
            p.background(255);
            p.pushMatrix();
            p.translate(p.width / 2, p.height / 2 + 20, -160);
            p.rotateX(p.PI / 3);
            p.rotateZ(theta);
            land.render();
            p.popMatrix();
            land.calculate();
            theta += 0.0025;
        };
    };
})(Exercise_I_10_NoiseLandscape || (Exercise_I_10_NoiseLandscape = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Exercise_I_10_NoiseLandscape.sketch);
//# sourceMappingURL=Sketch.js.map
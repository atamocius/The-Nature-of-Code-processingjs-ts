/// <reference path="../../scripts/typings/processing.d.ts" />
/// <reference path="ball.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_1_2_bouncingball_vectors_object;
(function (NOC_1_2_bouncingball_vectors_object) {
    'use strict';
    NOC_1_2_bouncingball_vectors_object.sketch = function (p) {
        var b;
        p.setup = function () {
            p.size(200, 200);
            b = new NOC_1_2_bouncingball_vectors_object.Ball(p);
        };
        p.draw = function () {
            p.background(255);
            b.update();
            b.display();
        };
    };
})(NOC_1_2_bouncingball_vectors_object || (NOC_1_2_bouncingball_vectors_object = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_2_bouncingball_vectors_object.sketch);
//# sourceMappingURL=Sketch.js.map
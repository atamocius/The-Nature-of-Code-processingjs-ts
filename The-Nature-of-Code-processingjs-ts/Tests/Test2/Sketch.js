/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var Test2;
(function (Test2) {
    'use strict';
    Test2.sketch = function (p) {
        p.setup = function () {
            return;
        };
        p.draw = function () {
            // determine center and max clock arm length
            var centerX = p.width / 2, centerY = p.height / 2;
            var maxArmLength = Math.min(centerX, centerY);
            var drawArm = function (position, lengthScale, weight) {
                p.strokeWeight(weight);
                p.line(centerX, centerY, centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength, centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
            };
            // erase background
            p.background(224);
            var now = new Date();
            // Moving hours arm by small increments
            var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
            drawArm(hoursPosition, 0.5, 5);
            // Moving minutes arm by small increments
            var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
            drawArm(minutesPosition, 0.80, 3);
            // Moving hour arm by second increments
            var secondsPosition = now.getSeconds() / 60;
            drawArm(secondsPosition, 0.90, 1);
        };
    };
})(Test2 || (Test2 = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Test2.sketch);
//# sourceMappingURL=Sketch.js.map
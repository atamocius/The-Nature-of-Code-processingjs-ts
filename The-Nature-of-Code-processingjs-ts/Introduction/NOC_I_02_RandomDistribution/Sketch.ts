/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_02 {
    'use strict';

    export var sketch = function (p: any): void {

        // An array to keep track of how often random numbers are picked
        var randomCounts: number[];

        p.setup = () => {
            p.size(640, 240);

            randomCounts = [];
            // Initialize array values to 0
            for (var i: number = 0; i < 20; i++) {
                randomCounts[i] = 0;
            }
        };

        p.draw = () => {
            p.background(255);

            var index: number = p.floor(p.random(randomCounts.length));
            randomCounts[index]++;

            p.stroke(0);
            p.fill(175);

            var w: number = p.width / randomCounts.length;

            for (var x: number = 0; x < randomCounts.length; x++) {
                p.rect(x * w, p.height - randomCounts[x], w - 1, randomCounts[x]);
            }
        };
    };

}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_02.sketch);

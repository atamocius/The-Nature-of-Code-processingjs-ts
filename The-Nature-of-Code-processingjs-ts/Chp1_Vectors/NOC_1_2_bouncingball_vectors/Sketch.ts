/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_1_2_bouncingball_vectors {
    'use strict';

    export var sketch = function (p: any): void {

        var location: any; // PVector
        var velocity: any; // PVector

        p.setup = () => {
            p.size(200, 200);
            p.background(255);
            location = new p.PVector(100, 100);
            velocity = new p.PVector(2.5, 5);
        };

        p.draw = () => {
            // The trail effect:
            // - the whole canvas is covered in a "thin sheet"
            //   (opracity of 10) of white rect, slowly clearing
            //   the cumulative remnance of the previous frames.
            p.noStroke();
            p.fill(255, 10);
            p.rect(0, 0, p.width, p.height);
            // Use this line if you don'w want trails
            //p.background(255);

            // Add the current speed to the location.
            location.add(velocity);

            if ((location.x > p.width) || (location.x < 0)) {
                velocity.x = velocity.x * -1;
            }
            if ((location.y > p.height) || (location.y < 0)) {
                velocity.y = velocity.y * -1;
            }

            // Display circle at x location
            p.stroke(0);
            p.fill(175);
            p.ellipse(location.x, location.y, 16, 16);
        };
    };
}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_1_2_bouncingball_vectors.sketch);

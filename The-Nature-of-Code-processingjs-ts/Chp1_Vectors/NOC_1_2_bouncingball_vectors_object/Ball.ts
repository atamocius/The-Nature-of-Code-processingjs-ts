/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_1_2_bouncingball_vectors_object {
    'use strict';

    export class Ball {

        private p: Processing;

        private location: PVector;
        private velocity: PVector;

        constructor(p: Processing) {
            this.p = p;

            this.location = new PVector(100, 100);
            this.velocity = new PVector(2.5, 5);
        }

        public update(): void {
            // Add the current speed to the location.
            this.location.add(this.velocity);
            if ((this.location.x > this.p.width) || (this.location.x < 0)) {
                this.velocity.x = this.velocity.x * -1;
            }
            if ((this.location.y > this.p.height) || (this.location.y < 0)) {
                this.velocity.y = this.velocity.y * -1;
            }
        }

        public display(): void {
            // Display circle at x location
            this.p.stroke(0);
            this.p.fill(175);
            this.p.ellipse(this.location.x, this.location.y, 16, 16);
        }
    }
}

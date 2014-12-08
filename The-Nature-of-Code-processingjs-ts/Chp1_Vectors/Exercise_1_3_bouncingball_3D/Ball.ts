/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module Exercise_1_3_bouncingball_3D {
    'use strict';

    export class Ball {

        private p: Processing;

        private location: PVector;
        private velocity: PVector;

        constructor(p: Processing) {
            this.p = p;

            this.location = new PVector(100, 100, 0);
            this.velocity = new PVector(2.5, 5, 3);
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
            if ((this.location.z > this.p.width / 2) || (this.location.z < -(this.p.width / 2))) {
                this.velocity.z = this.velocity.z * -1;
            }
        }

        public display(): void {
            this.p.noStroke();
            this.p.fill(255, 0, 0);

            this.p.pushMatrix();
            this.p.translate(this.location.x, this.location.y, this.location.z);
            this.p.shininess(5.0);
            this.p.sphere(50);
            this.p.popMatrix();
        }
    }
}

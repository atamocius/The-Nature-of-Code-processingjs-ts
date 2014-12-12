/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
'use strict';
define(["require", "exports"], function (require, exports) {
    var Car = (function () {
        function Car($p) {
            this.$p = $p;
            this.location = new PVector(this.$p.width / 2, this.$p.height / 2);
            this.velocity = new PVector(0, 0);
            this.topspeed = 6;
            this.acceleration = PVector.random2D();
            this.acceleration.mult(0.1);
            this.heading = this.acceleration.heading();
        }
        Car.prototype.update = function () {
            this.location.add(this.velocity);
        };
        Car.prototype.display = function () {
            this.$p.stroke(0);
            this.$p.strokeWeight(2);
            this.$p.fill(127);
            this.$p.pushMatrix();
            this.$p.translate(this.location.x, this.location.y);
            this.$p.rotate(this.heading);
            this.$p.rect(0, 0, 100, 40);
            this.$p.rect(55, 3, 15, 34);
            this.$p.rect(20, 3, 10, 34);
            this.$p.popMatrix();
        };
        Car.prototype.accelerate = function () {
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topspeed);
        };
        Car.prototype.decelerate = function () {
            this.velocity.sub(this.acceleration);
            //this.velocity.limit(this.topspeed);
            // Using the dot product, check if the velocity is
            // still pointing to the same direction as the
            // direction vector, otherwise, we stop the car.
            // http://blog.wolfire.com/2009/07/linear-algebra-for-game-developers-part-2/
            var dotProduct = this.velocity.dot(this.acceleration);
            if (dotProduct <= 0) {
                this.velocity.setMag(0);
            }
        };
        Car.prototype.checkEdges = function () {
            if (this.location.x > this.$p.width) {
                this.location.x = 0;
            }
            else if (this.location.x < 0) {
                this.location.x = this.$p.width;
            }
            if (this.location.y > this.$p.height) {
                this.location.y = 0;
            }
            else if (this.location.y < 0) {
                this.location.y = this.$p.height;
            }
        };
        return Car;
    })();
    return Car;
});
//# sourceMappingURL=Car.js.map
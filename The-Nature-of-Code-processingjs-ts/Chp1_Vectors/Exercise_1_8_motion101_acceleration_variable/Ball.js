/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_1_2_bouncingball_vectors_object;
(function (NOC_1_2_bouncingball_vectors_object) {
    'use strict';
    var Ball = (function () {
        function Ball(p) {
            this.p = p;
            this.location = new PVector(100, 100);
            this.velocity = new PVector(2.5, 5);
        }
        Ball.prototype.update = function () {
            // Add the current speed to the location.
            this.location.add(this.velocity);
            if ((this.location.x > this.p.width) || (this.location.x < 0)) {
                this.velocity.x = this.velocity.x * -1;
            }
            if ((this.location.y > this.p.height) || (this.location.y < 0)) {
                this.velocity.y = this.velocity.y * -1;
            }
        };
        Ball.prototype.display = function () {
            // Display circle at x location
            this.p.stroke(0);
            this.p.fill(175);
            this.p.ellipse(this.location.x, this.location.y, 16, 16);
        };
        return Ball;
    })();
    NOC_1_2_bouncingball_vectors_object.Ball = Ball;
})(NOC_1_2_bouncingball_vectors_object || (NOC_1_2_bouncingball_vectors_object = {}));
//# sourceMappingURL=Ball.js.map
/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports"], function (require, exports) {
    /* tslint:disable: no-unused-variable */
    /* tslint:disable: comment-format */
    var Mover = (function () {
        function Mover($p, m, x, y) {
            this.$p = $p;
            this.location = new PVector(x, y);
            this.velocity = new PVector(1, 0);
            this.acceleration = new PVector(0, 0);
            this.mass = m;
        }
        // Newton's 2nd law: F = M * A
        // or A = F / M
        Mover.prototype.applyForce = function (force) {
            // Divide by mass 
            var f = PVector.div(force, this.mass);
            // Accumulate all forces in acceleration
            this.acceleration.add(f);
        };
        Mover.prototype.update = function () {
            // Velocity changes according to acceleration
            this.velocity.add(this.acceleration);
            // Location changes by velocity
            this.location.add(this.velocity);
            // We must clear acceleration each frame
            this.acceleration.mult(0);
        };
        // Draw Mover
        Mover.prototype.display = function () {
            this.$p.stroke(0);
            this.$p.strokeWeight(2);
            this.$p.fill(0, 100);
            this.$p.ellipse(this.location.x, this.location.y, this.mass * 25, this.mass * 25);
        };
        return Mover;
    })();
    return Mover;
});
//# sourceMappingURL=Mover.js.map
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
            this.$p.ellipse(this.location.x, this.location.y, this.mass * 24, this.mass * 24);
        };
        Mover.prototype.attract = function (m) {
            // Calculate direction of force
            var force = PVector.sub(this.location, m.location);
            // Distance between objects
            var distance = force.mag();
            // Limiting the distance to eliminate "extreme"
            // results for very close or very far objects
            distance = this.$p.constrain(distance, 5.0, 25.0);
            // Normalize vector (distance doesn't matter here,
            // we just want this vector for direction)
            force.normalize();
            // Calculate gravitional force magnitude
            var strength = (Mover.G * this.mass * m.mass) / (distance * distance);
            // Get force vector --> magnitude * direction
            force.mult(strength);
            return force;
        };
        Mover.G = 0.4;
        return Mover;
    })();
    return Mover;
});
//# sourceMappingURL=Mover.js.map
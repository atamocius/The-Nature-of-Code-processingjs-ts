/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports"], function (require, exports) {
    /* tslint:disable: no-unused-variable */
    /* tslint:disable: comment-format */
    var Mover = (function () {
        function Mover($p, g, m, x, y) {
            this.$p = $p;
            this.g = g;
            this.location = new PVector(x, y);
            this.velocity = new PVector(0, 0);
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
            this.$p.fill(175, 200);
            this.$p.ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
        };
        Mover.prototype.repel = function (m) {
            // Calculate direction of force
            var force = PVector.sub(this.location, m.location);
            // Distance between objects
            var distance = force.mag();
            // Limiting the distance to eliminate "extreme"
            // results for very close or very far objects
            distance = this.$p.constrain(distance, 1.0, 10000.0);
            // Normalize vector (distance doesn't matter here,
            // we just want this vector for direction)
            force.normalize();
            // Calculate gravitional force magnitude
            var strength = (this.g * this.mass * m.mass) / (distance * distance);
            // Get force vector --> magnitude * direction
            force.mult(-1 * strength);
            return force;
        };
        Mover.prototype.checkEdges = function () {
            if (this.location.x > this.$p.width) {
                this.location.x = this.$p.width;
                this.velocity.x *= -1;
            }
            else if (this.location.x < 0) {
                this.location.x = 0;
                this.velocity.x *= -1;
            }
            if (this.location.y > this.$p.height) {
                this.location.y = this.$p.height;
                this.velocity.y *= -1;
            }
            else if (this.location.y < 0) {
                this.location.y = 0;
                this.velocity.y *= -1;
            }
        };
        return Mover;
    })();
    return Mover;
});
//# sourceMappingURL=Mover.js.map
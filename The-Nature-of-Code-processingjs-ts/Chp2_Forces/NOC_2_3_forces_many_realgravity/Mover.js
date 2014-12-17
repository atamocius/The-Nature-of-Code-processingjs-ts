/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports"], function (require, exports) {
    /* tslint:disable: no-unused-variable */
    /* tslint:disable: comment-format */
    var Mover = (function () {
        function Mover($p, m, x, y) {
            this.$p = $p;
            this.location = new PVector(x, y);
            this.velocity = new PVector(0, 0);
            this.acceleration = new PVector(0, 0);
            this.mass = m;
        }
        Mover.prototype.applyForce = function (force) {
            var f = PVector.div(force, this.mass);
            this.acceleration.add(f);
        };
        Mover.prototype.update = function () {
            this.velocity.add(this.acceleration);
            this.location.add(this.velocity);
            this.acceleration.mult(0);
        };
        Mover.prototype.display = function () {
            this.$p.stroke(0);
            this.$p.strokeWeight(2);
            this.$p.fill(0, 127);
            this.$p.ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
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
        };
        return Mover;
    })();
    return Mover;
});
//# sourceMappingURL=Mover.js.map
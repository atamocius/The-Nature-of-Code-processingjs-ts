/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports"], function (require, exports) {
    /* tslint:disable: no-unused-variable */
    /* tslint:disable: comment-format */
    var Mover = (function () {
        function Mover($p) {
            this.$p = $p;
            this.location = new PVector(this.$p.width / 2, this.$p.height / 2);
            this.velocity = new PVector(0, 0);
            this.acceleration = new PVector(-0.001, 0.01);
            this.topspeed = 10;
        }
        Mover.prototype.update = function () {
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topspeed);
            this.location.add(this.velocity);
        };
        Mover.prototype.display = function () {
            this.$p.stroke(0);
            this.$p.strokeWeight(2);
            this.$p.fill(127);
            this.$p.ellipse(this.location.x, this.location.y, 48, 48);
        };
        Mover.prototype.checkEdges = function () {
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
        return Mover;
    })();
    return Mover;
});
//# sourceMappingURL=Mover.js.map
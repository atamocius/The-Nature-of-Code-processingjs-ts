/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports"], function (require, exports) {
    var Attractor = (function () {
        function Attractor($p) {
            this.dragging = false; // Is the object being dragged?
            this.rollover = false; // Is the mouse over the ellipse?
            this.$p = $p;
            this.location = new PVector(this.$p.width / 2, this.$p.height / 2);
            this.mass = 20;
            this.G = 1;
            this.dragOffset = new PVector(0.0, 0.0);
        }
        Attractor.prototype.attract = function (m) {
            // Calculate direction of force
            var force = PVector.sub(this.location, m.location);
            // Distance between objects
            var d = force.mag();
            // Limiting the distance to eliminate "extreme"
            // results for very close or very far objects
            d = this.$p.constrain(d, 5.0, 25.0);
            // Normalize vector (distance doesn't matter here,
            // we just want this vector for direction)
            force.normalize();
            // Calculate gravitional force magnitude
            var strength = (this.G * this.mass * m.mass) / (d * d);
            // Get force vector --> magnitude * direction
            force.mult(strength);
            return force;
        };
        // Method to display
        Attractor.prototype.display = function () {
            this.$p.ellipseMode(this.$p.CENTER);
            this.$p.strokeWeight(4);
            this.$p.stroke(0);
            if (this.dragging) {
                this.$p.fill(50);
            }
            else if (this.rollover) {
                this.$p.fill(100);
            }
            else {
                this.$p.fill(175, 200);
            }
            this.$p.ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
        };
        // #region mouse interaction
        // The methods below are for mouse interaction
        Attractor.prototype.clicked = function (mx, my) {
            var d = this.$p.dist(mx, my, this.location.x, this.location.y);
            if (d < this.mass) {
                this.dragging = true;
                this.dragOffset.x = this.location.x - mx;
                this.dragOffset.y = this.location.y - my;
            }
        };
        Attractor.prototype.hover = function (mx, my) {
            var d = this.$p.dist(mx, my, this.location.x, this.location.y);
            if (d < this.mass) {
                this.rollover = true;
            }
            else {
                this.rollover = false;
            }
        };
        Attractor.prototype.stopDragging = function () {
            this.dragging = false;
        };
        Attractor.prototype.drag = function () {
            if (this.dragging) {
                this.location.x = this.$p.mouseX + this.dragOffset.x;
                this.location.y = this.$p.mouseY + this.dragOffset.y;
            }
        };
        return Attractor;
    })();
    return Attractor;
});
//# sourceMappingURL=Attractor.js.map
/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports"], function (require, exports) {
    var Liquid = (function () {
        function Liquid($p, x, y, w, h, c) {
            this.$p = $p;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;
        }
        // Is the Mover in the Liquid?
        Liquid.prototype.contains = function (m) {
            var l = m.location;
            return l.x > this.x && l.x < this.x + this.w && l.y > this.y && l.y < this.y + this.h;
        };
        // Calculate drag force
        Liquid.prototype.drag = function (m) {
            // Magnitude is surfaceArea * coefficient * speed squared
            var speed = m.velocity.mag();
            var dragMagnitude = m.surfaceArea * this.c * speed * speed;
            // Direction is inverse of velocity
            var dragForce = m.velocity.get();
            dragForce.mult(-1);
            // Scale according to magnitude
            // dragForce.setMag(dragMagnitude);
            dragForce.normalize();
            dragForce.mult(dragMagnitude);
            return dragForce;
        };
        Liquid.prototype.display = function () {
            this.$p.noStroke();
            this.$p.fill(50);
            this.$p.rect(this.x, this.y, this.w, this.h);
        };
        return Liquid;
    })();
    return Liquid;
});
//# sourceMappingURL=Liquid.js.map
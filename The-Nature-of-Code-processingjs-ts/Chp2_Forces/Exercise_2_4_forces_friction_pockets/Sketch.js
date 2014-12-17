/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover'], function (require, exports, Mover) {
    'use strict';
    exports.sketch = function ($p) {
        var movers = new Array(5);
        $p.setup = function () {
            $p.size(383, 200);
            for (var i = 0; i < movers.length; i++) {
                movers[i] = new Mover($p, $p.random(1, 4), $p.random($p.width), 0);
            }
        };
        var createFriction = function (c, velocity) {
            var friction = velocity.get();
            friction.mult(-1);
            friction.normalize();
            friction.mult(c);
            return friction;
        };
        var drawPocket = function (x, y, radius) {
            $p.stroke(0);
            $p.strokeWeight(1);
            $p.noFill();
            $p.ellipse(x, y, radius * 2, radius * 2);
        };
        var applyPocketFriction = function (m, c, x, y, radius) {
            var distance = $p.dist(x, y, m.location.x, m.location.y);
            if (distance <= radius) {
                // apply force if inside the pocket
                var friction = createFriction(c, m.velocity.get());
                m.applyForce(friction);
            }
        };
        $p.draw = function () {
            $p.background(255);
            drawPocket(80, 80, 40);
            drawPocket(200, 130, 50);
            drawPocket(310, 80, 30);
            for (var i = 0; i < movers.length; i++) {
                var wind = new PVector(0.01, 0);
                var gravity = new PVector(0, 0.1 * movers[i].mass);
                var friction = createFriction(0.05, movers[i].velocity.get());
                applyPocketFriction(movers[i], -0.5, 80, 80, 40);
                applyPocketFriction(movers[i], 0.05, 200, 130, 50);
                applyPocketFriction(movers[i], 0.7, 310, 80, 30);
                //movers[i].applyForce(friction);
                movers[i].applyForce(wind);
                movers[i].applyForce(gravity);
                movers[i].update();
                movers[i].display();
                movers[i].checkEdges();
            }
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
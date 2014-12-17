/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover'], function (require, exports, Mover) {
    'use strict';
    exports.sketch = function ($p) {
        var movers = new Array(20);
        $p.setup = function () {
            $p.size(640, 360);
            for (var i = 0; i < movers.length; i++) {
                movers[i] = new Mover($p, $p.random(0.1, 4), $p.width / 2, 0);
            }
        };
        $p.draw = function () {
            $p.background(255);
            for (var i = 0; i < movers.length; i++) {
                var wind = new PVector(0.1, 0);
                var gravity = new PVector(0, 0.1);
                var rightMag = movers[i].location.x;
                var rightRepell = new PVector(-rightMag * 0.00003, 0);
                var leftMag = $p.width - movers[i].location.x;
                var leftRepell = new PVector(leftMag * 0.00003, 0);
                var topMag = $p.height - movers[i].location.y;
                var topRepell = new PVector(0, topMag * 0.00003);
                var bottomMag = movers[i].location.y;
                var bottomRepell = new PVector(0, -bottomMag * 0.0006);
                if ($p.__keyPressed === true) {
                    movers[i].applyForce(wind);
                }
                movers[i].applyForce(gravity);
                movers[i].applyForce(rightRepell);
                movers[i].applyForce(leftRepell);
                movers[i].applyForce(topRepell);
                movers[i].applyForce(bottomRepell);
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
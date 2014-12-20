/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover'], function (require, exports, Mover) {
    'use strict';
    exports.sketch = function ($p) {
        var movers = new Array(20);
        $p.setup = function () {
            $p.size(640, 360);
            for (var i = 0; i < movers.length; i++) {
                movers[i] = new Mover($p, $p.random(0.1, 2), $p.random($p.width), $p.random($p.height));
            }
        };
        $p.draw = function () {
            $p.background(255);
            for (var i = 0; i < movers.length; i++) {
                for (var j = 0; j < movers.length; j++) {
                    if (i !== j) {
                        var force = movers[j].attract(movers[i]);
                        movers[i].applyForce(force);
                    }
                }
                movers[i].update();
                movers[i].display();
            }
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
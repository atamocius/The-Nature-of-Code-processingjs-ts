/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Mover', 'Liquid'], function (require, exports, Mover, Liquid) {
    'use strict';
    exports.sketch = function ($p) {
        // Moving bodies
        var movers = new Array(5);
        // Liquid
        var liquid;
        // Restart all the Mover objects randomly
        var reset = function () {
            for (var i = 0; i < movers.length; i++) {
                movers[i] = new Mover($p, $p.random(0.5 * 2.25, 3 * 2.25), 20 * 2.25 + i * 40 * 2.25, 0);
            }
        };
        $p.setup = function () {
            $p.size(450, 450);
            $p.randomSeed(1);
            reset();
            // Create liquid object
            liquid = new Liquid($p, 0, $p.height / 2, $p.width, $p.height / 2, 0.1);
        };
        $p.draw = function () {
            $p.background(255);
            // Draw water
            liquid.display();
            for (var i = 0; i < movers.length; i++) {
                // Is the Mover in the liquid?
                if (liquid.contains(movers[i])) {
                    // Calculate drag force
                    var dragForce = liquid.drag(movers[i]);
                    // Apply drag force to Mover
                    movers[i].applyForce(dragForce);
                }
                // Gravity is scaled by mass here!
                var gravity = new PVector(0, 0.1 * movers[i].mass);
                // Apply gravity
                movers[i].applyForce(gravity);
                // Update and display
                movers[i].update();
                movers[i].display();
                movers[i].checkEdges();
            }
            $p.fill(0);
            // $p.text('click mouse to reset', 10, 30);
            if ($p.frameCount % 20 == 0)
                $p.saveFrame("ch2_05_####.png");
        };
        $p.mousePressed = function () {
            reset();
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map
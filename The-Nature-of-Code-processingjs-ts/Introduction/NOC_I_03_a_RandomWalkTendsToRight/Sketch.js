/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_03_a;
(function (NOC_I_03_a) {
    'use strict';
    var Walker = (function () {
        function Walker(p) {
            this.p = p;
            this.x = this.p.width / 2;
            this.y = this.p.height / 2;
        }
        Walker.prototype.display = function () {
            this.p.stroke(0);
            this.p.point(this.x, this.y);
        };
        Walker.prototype.step = function () {
            var r = this.p.random(1);
            // A 40% of moving to the right!
            if (r < 0.4) {
                this.x++;
            }
            else if (r < 0.6) {
                this.x--;
            }
            else if (r < 0.8) {
                this.y++;
            }
            else {
                this.y--;
            }
            this.x = this.p.constrain(this.x, 0, this.p.width - 1);
            this.y = this.p.constrain(this.y, 0, this.p.height - 1);
        };
        return Walker;
    })();
    NOC_I_03_a.sketch = function (p) {
        var walker;
        p.setup = function () {
            p.size(640, 360);
            walker = new Walker(p);
            p.background(255);
        };
        p.draw = function () {
            walker.step();
            walker.display();
        };
    };
})(NOC_I_03_a || (NOC_I_03_a = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_03_a.sketch);
//# sourceMappingURL=Sketch.js.map
/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_01_a;
(function (NOC_I_01_a) {
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
            // 0, 1, 2, or 3
            var choice = this.p.floor(this.p.random(4));
            if (choice === 0) {
                this.x++;
            }
            else if (choice === 1) {
                this.x--;
            }
            else if (choice === 2) {
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
    NOC_I_01_a.sketch = function (p) {
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
})(NOC_I_01_a || (NOC_I_01_a = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_01_a.sketch);
//# sourceMappingURL=Sketch.js.map
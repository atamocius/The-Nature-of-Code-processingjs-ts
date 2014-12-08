/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var Exercise_1_3_bouncingball_3D;
(function (Exercise_1_3_bouncingball_3D) {
    'use strict';
    var Box = (function () {
        function Box(p) {
            this.p = p;
        }
        Box.prototype.update = function () {
            return;
        };
        Box.prototype.display = function () {
            this.p.stroke(0);
            this.p.noFill();
            this.p.pushMatrix();
            this.p.translate(this.p.width / 2, this.p.height / 2, 0);
            this.p.box(this.p.width);
            this.p.popMatrix();
        };
        return Box;
    })();
    Exercise_1_3_bouncingball_3D.Box = Box;
})(Exercise_1_3_bouncingball_3D || (Exercise_1_3_bouncingball_3D = {}));
//# sourceMappingURL=Box.js.map
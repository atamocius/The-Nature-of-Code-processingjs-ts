/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
'use strict';
define(["require", "exports"], function (require, exports) {
    var Box = (function () {
        function Box($p) {
            this.$p = $p;
        }
        Box.prototype.update = function () {
            return;
        };
        Box.prototype.display = function () {
            this.$p.stroke(0);
            this.$p.noFill();
            this.$p.pushMatrix();
            this.$p.translate(this.$p.width / 2, this.$p.height / 2, 0);
            this.$p.box(this.$p.width);
            this.$p.popMatrix();
        };
        return Box;
    })();
    return Box;
});
//# sourceMappingURL=Box.js.map
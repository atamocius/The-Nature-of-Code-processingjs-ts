/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_01_b {
    'use strict';

    class Walker {
        private p: any;

        private x: number;
        private y: number;

        constructor(p: any) {
            this.p = p;

            this.x = this.p.width / 2;
            this.y = this.p.height / 2;
        }

        display(): void {
            this.p.stroke(0);
            this.p.point(this.x, this.y);
        }

        step(): void {
            // Yields -1, 0, or 1
            //var stepx: number = this.p.floor(this.p.random(3)) - 1;
            //var stepy: number = this.p.floor(this.p.random(3)) - 1;
            // Yields any floating point number between -1.0 and 1.0
            var stepx: number = this.p.random(-1, 1);
            var stepy: number = this.p.random(-1, 1);
            this.x += stepx;
            this.y += stepy;

            this.x = this.p.constrain(this.x, 0, this.p.width - 1);
            this.y = this.p.constrain(this.y, 0, this.p.height - 1);
        }
    }

    export var sketch = function (p: any): void {

        var walker: Walker;

        p.setup = () => {
            p.size(640, 360);
            walker = new Walker(p);
            p.background(255);
        };

        p.draw = () => {
            walker.step();
            walker.display();
        };
    };

}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_01_b.sketch);

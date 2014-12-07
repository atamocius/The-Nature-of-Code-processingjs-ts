/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_01_a {
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
            // 0, 1, 2, or 3
            var choice: number = this.p.floor(this.p.random(4));

            if (choice === 0) {
                this.x++;
            } else if (choice === 1) {
                this.x--;
            } else if (choice === 2) {
                this.y++;
            } else {
                this.y--;
            }

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
var processingInstance = new Processing(canvas, NOC_I_01_a.sketch);

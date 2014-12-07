/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_03_a {
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
            var r: number = this.p.random(1);

            // A 40% of moving to the right!
            if (r < 0.4) {
                this.x++;
            } else if (r < 0.6) { // 20% probability of moving left
                this.x--;
            } else if (r < 0.8) { // 20% probability of moving up
                this.y++;
            } else {  // 20% probability of moving down
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
var processingInstance = new Processing(canvas, NOC_I_03_a.sketch);

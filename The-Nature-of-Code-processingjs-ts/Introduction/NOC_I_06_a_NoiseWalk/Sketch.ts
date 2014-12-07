/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_a {
    'use strict';

    class Walker {
        private p: any;

        private pos: any;
        private nOff: any; // noise offset

        constructor(p: any) {
            this.p = p;

            this.pos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.nOff = new this.p.PVector(this.p.random(0), this.p.random(10000));
        }

        display(): void {
            this.p.strokeWeight(2);
            this.p.fill(51);
            this.p.stroke(0);
            this.p.ellipse(this.pos.x, this.pos.y, 48, 48);
        }

        step(): void {
            this.pos.x = this.p.map(this.p.noise(this.nOff.x), 0, 1, 0, this.p.width);
            this.pos.y = this.p.map(this.p.noise(this.nOff.y), 0, 1, 0, this.p.height);
            this.nOff.add(0.01, 0.01, 0);
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
var processingInstance = new Processing(canvas, NOC_I_06_a.sketch);

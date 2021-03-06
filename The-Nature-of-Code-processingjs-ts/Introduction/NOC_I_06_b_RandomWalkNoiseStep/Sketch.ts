﻿/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_b {
    'use strict';

    class Walker {
        private p: any;

        private pos: any;
        private prevPos: any;
        private nOff: number; // noise offset

        constructor(p: any) {
            this.p = p;

            this.pos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.prevPos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.nOff = this.p.random(10000);
        }

        display(): void {
            this.p.stroke(0);
            this.p.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        }

        step(): void {
            this.prevPos.set(this.pos.x, this.pos.y);

            var maxStepSize: number = 20;
            var stepSize: number = this.p.map(this.p.noise(this.nOff), 0, 1, 0, maxStepSize);
            this.nOff += 0.01;

            // 0, 1, 2, or 3
            var choice: number = this.p.floor(this.p.random(4));

            if (choice === 0) {
                this.pos.x += stepSize;
            } else if (choice === 1) {
                this.pos.x -= stepSize;
            } else if (choice === 2) {
                this.pos.y += stepSize;
            } else {
                this.pos.y -= stepSize;
            }

            this.pos.x = this.p.constrain(this.pos.x, 0, this.p.width - 1);
            this.pos.y = this.p.constrain(this.pos.y, 0, this.p.height - 1);
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
var processingInstance = new Processing(canvas, NOC_I_06_b.sketch);

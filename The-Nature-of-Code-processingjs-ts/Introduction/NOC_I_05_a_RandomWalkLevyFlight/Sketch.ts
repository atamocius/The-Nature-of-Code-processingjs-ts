﻿/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_05_a {
    'use strict';

    class Walker {
        private p: any;

        private pos: any;
        private prevPos: any;

        constructor(p: any) {
            this.p = p;

            this.pos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
            this.prevPos = new this.p.PVector(this.p.width / 2, this.p.height / 2);
        }

        display(): void {
            this.p.stroke(0);
            this.p.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        }

        step(): void {
            this.prevPos.set(this.pos.x, this.pos.y);

            // Levy flight
            var xStep: number;
            var yStep: number;
            var r: number = this.p.random(1);

            if (r < 0.01) {
                xStep = this.p.random(-100, 100);
                yStep = this.p.random(-100, 100);
            } else {
                xStep = this.p.random(-1, 1);
                yStep = this.p.random(-1, 1);
            }

            this.pos.x += xStep;
            this.pos.y += yStep;

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
var processingInstance = new Processing(canvas, NOC_I_05_a.sketch);

/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module Test1 {
    'use strict';

    class Test {
        private p: any;

        constructor(p: any) {
            this.p = p;
        }

        setup(): void {
            this.p.size(640, 480);
            this.p.background(255);
        }

        draw(): void {
            if (this.p.mousePressed) {
                this.p.fill(0);
            } else {
                this.p.fill(255);
            }
            this.p.ellipse(this.p.mouseX, this.p.mouseY, 80, 80);
        }
    }

    export var sketch = function (p: any): void {

        var t: Test;

        p.setup = () => {
            t = new Test(p);
            t.setup();
        };

        p.draw = () => {
            t.draw();
        };
    };
}

var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, Test1.sketch);

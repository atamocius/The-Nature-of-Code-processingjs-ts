/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module Exercise_I_10_NoiseLandscape {
    'use strict';

    export class Landscape {
        // processing object
        private p: any;
        // size of each cell
        private scl: number;
        // width and height of thingie
        private w: number;
        private h: number;
        // number of rows and columns
        private rows: number;
        private cols: number;
        // perlin noise argument
        private zoff: number = 0.0;
        // using an array to store all the height values 
        private z: number[][];

        constructor(p: any, scl: number, w: number, h: number) {
            this.p = p;

            this.scl = scl;
            this.w = w;
            this.h = h;
            this.cols = w / scl;
            this.rows = h / scl;

            this.z = this.initializeArray2D(this.z, this.cols, this.rows, 0);
        }

        initializeArray2D<T>(arr: T[][], cols: number, rows: number, initValue: T): T[][] {
            arr = [];

            for (var i: number = 0; i < cols; i++) {
                arr.push([]);
                for (var j: number = 0; j < rows; j++) {
                    arr[i][j] = initValue;
                }
            }

            return arr;
        }

        // Calculate height values (based off a neural netork)
        calculate(): void {
            var xoff: number = 0;

            for (var i: number = 0; i < this.cols; i++) {

                var yoff: number = 0;

                for (var j: number = 0; j < this.rows; j++) {

                    this.z[i][j] = this.p.map(this.p.noise(xoff, yoff, this.zoff), 0, 1, -120, 120);
                    yoff += 0.1;

                }

                xoff += 0.1;
            }

            this.zoff += 0.01;
        }

        // Render landscape as grid of quads
        render(): void {
            // Every cell is an individual quad
            // (could use quad_strip here, but produces funny results, investigate this)
            for (var x: number = 0; x < this.z.length - 1; x++) {
                for (var y: number = 0; y < this.z[x].length - 1; y++) {
                    // one quad at a time
                    // each quad's color is determined by the height value at each vertex
                    // (clean this part up)
                    this.p.stroke(0);
                    this.p.fill(100, 100);
                    this.p.pushMatrix();
                    this.p.beginShape(this.p.QUADS);
                    this.p.translate(x * this.scl - this.w / 2, y * this.scl - this.h / 2, 0);
                    this.p.vertex(0, 0, this.z[x][y]);
                    this.p.vertex(this.scl, 0, this.z[x + 1][y]);
                    this.p.vertex(this.scl, this.scl, this.z[x + 1][y + 1]);
                    this.p.vertex(0, this.scl, this.z[x][y + 1]);
                    this.p.endShape();
                    this.p.popMatrix();
                }
            }
        }
    }
}

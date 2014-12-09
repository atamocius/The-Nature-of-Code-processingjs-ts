/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

'use strict';

class Box {

    private $p: Processing;

    constructor($p: Processing) {
        this.$p = $p;
    }

    public update(): void {
        return;
    }

    public display(): void {
        this.$p.stroke(0);
        this.$p.noFill();

        this.$p.pushMatrix();
        this.$p.translate(this.$p.width / 2, this.$p.height / 2, 0);
        this.$p.box(this.$p.width);
        this.$p.popMatrix();
    }
}

export = Box;
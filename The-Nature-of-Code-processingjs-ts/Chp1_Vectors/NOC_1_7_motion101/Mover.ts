/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

class Mover {
    'use strict'

    private $p: Processing;

    private location: PVector;
    private velocity: PVector;

    constructor($p: Processing) {
        this.$p = $p;

        this.location = new PVector(this.$p.random(this.$p.width), this.$p.random(this.$p.height));
        this.velocity = new PVector(this.$p.random(-2, 2), this.$p.random(-2, 2));
    }

    public update(): void {
        this.location.add(this.velocity);
    }

    public display(): void {
        this.$p.stroke(0);
        this.$p.strokeWeight(2);
        this.$p.fill(127);
        this.$p.ellipse(this.location.x, this.location.y, 48, 48);
    }

    public checkEdges(): void {
        if (this.location.x > this.$p.width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = this.$p.width;
        }

        if (this.location.y > this.$p.height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = this.$p.height;
        }
    }
}

export = Mover;
/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

class Mover {
    'use strict'

    private $p: Processing;

    private location: PVector;
    private velocity: PVector;
    private acceleration: PVector;
    private topspeed: number;

    constructor($p: Processing) {
        this.$p = $p;

        this.location = new PVector(this.$p.width / 2, this.$p.height / 2);
        this.velocity = new PVector(0, 0);
        this.topspeed = 6;
    }

    public update(): void {
        this.acceleration = PVector.random2D();
        this.acceleration.mult(this.$p.random(2));

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
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
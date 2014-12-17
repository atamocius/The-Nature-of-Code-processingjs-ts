/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

class Mover {
    'use strict'

    private $p: Processing;

    private location: PVector;
    private velocity: PVector;
    private acceleration: PVector;
    private mass: number;

    constructor($p: Processing, m: number, x: number, y: number) {
        this.$p = $p;

        this.location = new PVector(x, y);
        this.velocity = new PVector(0, 0);
        this.acceleration = new PVector(0, 0);
        this.mass = m;
    }

    public applyForce(force: PVector): void {
        var f: PVector = PVector.div(force, this.mass);
        this.acceleration.add(f);
    }

    public update(): void {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    public display(): void {
        this.$p.stroke(0);
        this.$p.strokeWeight(2);
        this.$p.fill(0, 127);
        this.$p.ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
    }

    public checkEdges(): void {
        if (this.location.x > this.$p.width) {
            this.location.x = this.$p.width;
            this.velocity.x *= -1;
        } else if (this.location.x < 0) {
            this.location.x = 0;
            this.velocity.x *= -1;
        }

        if (this.location.y > this.$p.height) {
            this.location.y = this.$p.height;
            this.velocity.y *= -1;
        }
    }
}

export = Mover;
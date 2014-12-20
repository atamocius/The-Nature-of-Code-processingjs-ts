/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

class Mover {
    'use strict';

    private $p: Processing;

    // location, velocity, and acceleration 
    public location: PVector;
    public velocity: PVector;
    private acceleration: PVector;

    // Mass is tied to size
    public mass: number;

    constructor($p: Processing, m: number, x: number, y: number) {
        this.$p = $p;

        this.location = new PVector(x, y);
        this.velocity = new PVector(1, 0);
        this.acceleration = new PVector(0, 0);
        this.mass = m;
    }

    // Newton's 2nd law: F = M * A
    // or A = F / M
    public applyForce(force: PVector): void {
        // Divide by mass 
        var f: PVector = PVector.div(force, this.mass);
        // Accumulate all forces in acceleration
        this.acceleration.add(f);
    }

    public update(): void {
        // Velocity changes according to acceleration
        this.velocity.add(this.acceleration);
        // Location changes by velocity
        this.location.add(this.velocity);
        // We must clear acceleration each frame
        this.acceleration.mult(0);
    }

    // Draw Mover
    public display(): void {
        this.$p.stroke(0);
        this.$p.strokeWeight(2);
        this.$p.fill(0, 100);
        this.$p.ellipse(this.location.x, this.location.y, this.mass * 25, this.mass * 25);
    }
}

export = Mover;
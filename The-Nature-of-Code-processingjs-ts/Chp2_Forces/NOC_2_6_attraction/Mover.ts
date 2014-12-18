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

    constructor($p: Processing) {
        this.$p = $p;

        this.location = new PVector(400, 50);
        this.velocity = new PVector(1, 0);
        this.acceleration = new PVector(0, 0);
        this.mass = 1;
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
        this.$p.fill(127);
        this.$p.ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
    }

    public checkEdges(): void {
        if (this.location.x > this.$p.width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = this.$p.width;
        }

        if (this.location.y > this.$p.height) {
            this.location.y = this.$p.height;
            this.velocity.y *= -1;
        }
    }
}

export = Mover;
/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

class Mover {
    'use strict';

    private $p: Processing;

    public static G: number = 0.4;

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
        this.$p.ellipse(this.location.x, this.location.y, this.mass * 24, this.mass * 24);
    }

    public attract(m: Mover): PVector {
        // Calculate direction of force
        var force: PVector = PVector.sub(this.location, m.location);
        // Distance between objects
        var distance: number = force.mag();
        // Limiting the distance to eliminate "extreme"
        // results for very close or very far objects
        distance = this.$p.constrain(distance, 5.0, 25.0);
        // Normalize vector (distance doesn't matter here,
        // we just want this vector for direction)
        force.normalize();
        // Calculate gravitional force magnitude
        var strength: number = (Mover.G * this.mass * m.mass) / (distance * distance);
        // Get force vector --> magnitude * direction
        force.mult(strength);

        return force;
    }
}

export = Mover;
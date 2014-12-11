/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

class Mover {
    'use strict'

    private $p: Processing;

    // The Mover tracks location, velocity, and acceleration 
    private location: PVector;
    private velocity: PVector;
    private acceleration: PVector;
    // The Mover's maximum speed
    private topspeed: number;

    constructor($p: Processing) {
        this.$p = $p;

        // Start in the center
        this.location = new PVector(this.$p.random(this.$p.width), this.$p.random(this.$p.height));
        this.velocity = new PVector(0, 0);
        this.topspeed = 5;
    }

    public update(): void {
        // Compute a vector that points from location to mouse
        var mouse: PVector = new PVector(this.$p.mouseX, this.$p.mouseY);
        this.acceleration = PVector.sub(mouse, this.location);
        // Set magnitude of acceleration
        //this.acceleration.setMag(0.2);
        this.acceleration.normalize();
        this.acceleration.mult(0.2);

        // Velocity changes according to acceleration
        this.velocity.add(this.acceleration);
        // Limit the velocity by topspeed
        this.velocity.limit(this.topspeed);
        // Location changes by velocity
        this.location.add(this.velocity);
    }

    public display(): void {
        this.$p.stroke(0);
        this.$p.strokeWeight(2);
        this.$p.fill(127, 200);
        this.$p.ellipse(this.location.x, this.location.y, 48, 48);
    }
}

export = Mover;
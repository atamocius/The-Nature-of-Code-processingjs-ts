/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

// A class for a draggable attractive body in our world

import Mover = require('Mover');

class Attractor {
    'use strict';

    private $p: Processing;

    private mass: number;    // Mass, tied to size
    private G: number;       // Gravitational Constant
    private location: PVector;   // Location
    private dragging: boolean = false; // Is the object being dragged?
    private rollover: boolean = false; // Is the mouse over the ellipse?
    private dragOffset: PVector;  // holds the offset for when object is clicked on

    constructor($p: Processing) {
        this.$p = $p;

        this.location = new PVector(this.$p.width / 2, this.$p.height / 2);
        this.mass = 20;
        this.G = 1;
        this.dragOffset = new PVector(0.0, 0.0);
    }

    public attract(m: Mover): PVector {
        // Calculate direction of force
        var force: PVector = PVector.sub(this.location, m.location);
        // Distance between objects
        var d: number = force.mag();
        // Limiting the distance to eliminate "extreme"
        // results for very close or very far objects
        d = this.$p.constrain(d, 5.0, 25.0);
        // Normalize vector (distance doesn't matter here,
        // we just want this vector for direction)
        force.normalize();
        // Calculate gravitional force magnitude
        var strength: number = (this.G * this.mass * m.mass) / (d * d);
        // Get force vector --> magnitude * direction
        force.mult(strength);

        return force;
    }

    // Method to display
    public display(): void {
        this.$p.ellipseMode(this.$p.CENTER);
        this.$p.strokeWeight(4);
        this.$p.stroke(0);

        if (this.dragging)
            this.$p.fill(50);
        else if (this.rollover)
            this.$p.fill(100);
        else
            this.$p.fill(175, 200);

        this.$p.ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
    }

    // The methods below are for mouse interaction
    public clicked(mx: number, my: number): void {
        var d: number = this.$p.dist(mx, my, this.location.x, this.location.y);
        if (d < this.mass) {
            this.dragging = true;
            this.dragOffset.x = this.location.x - mx;
            this.dragOffset.y = this.location.y - my;
        }
    }

    public hover(mx: number, my: number): void {
        var d: number = this.$p.dist(mx, my, this.location.x, this.location.y);
        if (d < this.mass) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    public stopDragging(): void {
        this.dragging = false;
    }

    public drag(): void {
        if (this.dragging) {
            this.location.x = this.$p.mouseX + this.dragOffset.x;
            this.location.y = this.$p.mouseY + this.dragOffset.y;
        }
    }
}

export = Attractor;
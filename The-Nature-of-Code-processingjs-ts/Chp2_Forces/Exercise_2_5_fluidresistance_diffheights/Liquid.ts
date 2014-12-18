/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Mover = require('Mover');

class Liquid {
    'use strict';

    private $p: Processing;

    // Liquid is a rectangle
    private x: number;
    private y: number;
    private w: number;
    private h: number;
    // Coefficient of drag
    private c: number;

    constructor($p: Processing, x: number, y: number, w: number, h: number, c: number) {
        this.$p = $p;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    // Is the Mover in the Liquid?
    contains(m: Mover): boolean {
        var l: PVector = m.location;
        return l.x > this.x && l.x < this.x + this.w && l.y > this.y && l.y < this.y + this.h;
    }

    // Calculate drag force
    drag(m: Mover): PVector {
        // Magnitude is coefficient * speed squared
        var speed: number = m.velocity.mag();
        var dragMagnitude = this.c * speed * speed;

        // Direction is inverse of velocity
        var dragForce: PVector = m.velocity.get();
        dragForce.mult(-1);

        // Scale according to magnitude
        // dragForce.setMag(dragMagnitude);
        dragForce.normalize();
        dragForce.mult(dragMagnitude);

        return dragForce;
    }

    display(): void {
        this.$p.noStroke();
        this.$p.fill(50);
        this.$p.rect(this.x, this.y, this.w, this.h);
    }
}

export = Liquid;
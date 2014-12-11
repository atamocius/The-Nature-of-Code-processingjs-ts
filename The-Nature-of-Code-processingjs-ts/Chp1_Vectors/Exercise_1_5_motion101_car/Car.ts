/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

'use strict';

class Car {

    private $p: Processing;

    constructor($p: Processing) {
        this.$p = $p;
    }

    public update(): void {
    }

    public display(): void {
    }
}

export = Car;
/// <reference path="../../scripts/typings/requirejs/require.d.ts" />

require.config({
});

require(
    [
        'sketch'
    ],
    (sketch: any) => {
        sketch.run();
    }
);
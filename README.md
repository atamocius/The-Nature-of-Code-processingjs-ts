The-Nature-of-Code-processingjs-ts
==================================

Port of *Nature of Code* examples to TypeScript using Processing.js.

The aim of this port is to show a simple and concise usage of TypeScript with Processing.js. There is no overly complicated definition file and no complicated wrapping of Processing.js objects.

All codes are in TypeScript using the Processing.js JavaScript API.

Notes:
-----
- As of now, the definition file `processing.d.ts` only contains a single ambient declaration to satisfy TypeScript's static check:

    ```typescript
    declare var Processing: any;
    ```

    *This is still a WIP and is subject to change (ie. I may write a more descriptive definition file as time permits).*

- I am currently reading the book and will port the codes as I encounter them.

- The codes for the *Introduction* will be rewritten to match the *[The-Nature-of-Code-Examples](https://github.com/shiffman/The-Nature-of-Code-Examples/)* repo. Much of the initial version came from the book's text and my own answers to the exercises.
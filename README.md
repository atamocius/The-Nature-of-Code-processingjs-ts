The-Nature-of-Code-processingjs-ts
==================================

Port of *Nature of Code* examples to TypeScript using Processing.js.

The aim of this port is to show a simple and concise usage of TypeScript with Processing.js. There is no overly complicated definition file and no complicated wrapping of Processing.js objects. Essentially using TypeScript directly on top of Processing.js.

All codes are in TypeScript using the Processing.js JavaScript API.

Notes:
-----
- As of now, the definition file `processing.d.ts` declares the objects as interfaces but pretty much all member properties and methods are just declared as `any`.

    *This is still a WIP and is subject to change (ie. I'll write the complete the method signatures once the Processing.js reference documentation becomes more mature and clearer. I attempted to write a complete definition but I was frustrated by the number of inconsistencies in the documentation. I'll probably just work on it as I go along).*

- I am currently reading the book and will port the codes as I encounter them.

- The codes for the *Introduction* will be rewritten to match the *[The-Nature-of-Code-Examples](https://github.com/shiffman/The-Nature-of-Code-Examples/)* repo. Much of the initial version came from the book's text and my own answers to the exercises.
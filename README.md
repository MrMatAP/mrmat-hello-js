# MrMat :: Hello JS

Experiments in Javascript

## Test Frameworks

* Driver: [Mocha](https://mochajs.org/) with its TDD interface
* Assertion: [Chai](https://www.chaijs.com/) with its Assert interface

Produce xunit via `-R xunit --reporter-option output=build/xunit.xml`. Unfortunately it doesn't look
like you can have multiple reporters active at the same time.

## Code Coverage

* There's [Instanbul's nyc](https://istanbul.js.org/)
* There's [Node's native c8](https://openbase.com/js/c8/documentation)

Instanbul appears to get confused about the module structure and doesn't record the hits it ought to.
c8 did so that's what it's going to be.


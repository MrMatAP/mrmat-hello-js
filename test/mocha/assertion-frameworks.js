/*
 * MIT License
 *
 * Copyright (c) 2022  Mr Mat
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { default as node_assert } from 'assert';       // Default import
import { default as should } from 'should';             // Default import
import { default as expect } from 'expect.js';          // Default import
import { expect as chai_expect, assert as chai_assert } from 'chai'
import { default as better_assert } from 'better-assert'
import { default as expected } from 'unexpected'

//
// There are various assertion frameworks available in Mocha and there
// are various test 'interfaces' available.
// I think I prefer the TDD interface and Chai - Assert

suite('Mocha Basics', () => {

    // suiteSetup()
    // setup()
    // test()
    // teardown()
    // suiteTeardown()

    test('Node Assert', () => {
        node_assert.equal([1,2,3].indexOf(4), -1)
    })

    test('Should', () => {
        ([1,2,3].indexOf(4)).should.be.exactly(-1)
    })

    test('Expect', () => {
        expect([1,2,3].indexOf(4)).to.equal(-1)
    })

    // We cannot test Chain - Should because both should.js and Chai would modify
    // the Object prototype

    test('Chai - Expect', () => {
        chai_expect([1,2,3].indexOf(4)).to.equal(-1)
    })

    test('Chai - Assert', () => {
        chai_assert.equal(
            [1,2,3].indexOf(4),
            -1,
            'The indexOf function returns -1 for out of bounds indices')
    })

    test('Better Assert', () => {
        better_assert([1,2,3].indexOf(4) === -1)
    })

    test('Unexpected', () => {
        expected([1,2,3].indexOf(4), 'to be', -1)
    })

})

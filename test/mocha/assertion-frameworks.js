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

const assert = require('assert');
require('should')
const expect = require('expect.js')
const chai_expect = require('chai').expect
const chai_assert = require('chai').assert
const better_assert = require('better-assert')
const expected = require('unexpected')


describe('Mocha Basics', () => {

    /**
     * There are various means to use assertions in Mocha
     */
    describe('Mocha Assertion Frameworks', () => {

        it('Node Assert', () => {
            assert.equal([1,2,3].indexOf(4), -1)
        })

        it('Should', () => {
            ([1,2,3].indexOf(4)).should.be.exactly(-1)
        })

        it('Expect', () => {
            expect([1,2,3].indexOf(4)).to.equal(-1)
        })

        // We cannot test Chain - Should because both should.js and Chai would modify
        // the Object prototype

        it('Chai - Expect', () => {
            chai_expect([1,2,3].indexOf(4)).to.equal(-1)
        })

        it('Chai - Assert', () => {
            chai_assert.equal(
                [1,2,3].indexOf(4),
                -1,
                'The indexOf function returns -1 for out of bounds indices')
        })

        it('Better Assert', () => {
            better_assert([1,2,3].indexOf(4) === -1)
        })

        it('Unexpected', () => {
            expected([1,2,3].indexOf(4), 'to be', -1)
        })
    })

})

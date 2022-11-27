# JEST
JEST is a popular ***testing framework*** for JavaScript

## Jest Documentation Notes

### How to Write Tests with JEST
1. Wrap what you want to test in a `describe()` method
    - This is called a test suite
    - Useful for programmers to see the code more clearly and know what the test is for
2. `test()` or `it()` can be used as a test case
    - There can be several test cases in a test suite (inside the `describe()`)


### Steps of Testing Code
1. In order to start, create the JS file, for example `sum.js`, and at the end of the file you will add `module.exports = sum;`
    - If there are more than one tests:
        - sample
2. Create a file that will contain the test with the following syntax `sum.test.js`
3. You have to run npm install in order to add jest
    - This must be done with every project in order to test the code with JEST
4. Run `npm test` so JEST will run your test and see if it is correct

### Common JEST Matchers
- Matchers let you test values
    - 

### Common JEST Methods
- 
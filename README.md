# JEST
JEST is a popular ***testing framework*** for JavaScript and the main purpose of it is to test your code without needing to open a browser. Use it not only to check if your code works normally, but also with edge cases.

## Jest Documentation Notes

### How to Write Tests with JEST
1. Wrap what you want to test in a `describe()` method
    - This is called a test suite
        - A test suite can contain multiple tests inside of it
    - Useful for programmers to see the code more clearly and know what the test is for
2. `test()` or `it()` can be used as a test case
    - There can be several test cases in a test suite (inside the `describe()`)
3. `beforeEach()`is a hook to run before each `test()` or `describe()`
    - Used to create a new instance for the class we are testing because they need to be independent from each other
    - Other hooks are `beforeAll()`, `afterAll()`, or `afterEach()`
        - These will run respectively, before/after each tests or before/after each instance

### Steps of Testing Code
1. In order to start, create the JS file, for example `sum.js`, and at the end of the file you will add `module.exports = sumArray;`
    - If there are more than one tests in one file:
        - It will still work when you link the files together
            - You just need more than one test suite for every problem that you have
2. Create a file that will contain the test with the following syntax `sumArray.test.js`
    - Inside this file, write the following below, since we want to connect it to the file `sumArray.js`:

        ```
        const sumArray = require(../src/sumArray)
        ```

        *the reason it's structured like this is because we have the file in another folder*

        **Structure that we want:**

        ```
        test("a description of what you want to test, which will show up in the console", a function that gets called to run the test)
        ```

        **What we want for this example:**

        ```
        test("properly clones array", () => {
            const array = [1, 2, 3]
            expect(sumArray(array).toBe(newArray))
        })
        ```
3. You have to run npm install in order to add jest
    - This must be done with every project in order to test the code with JEST
4. Run `npm test` so JEST will run your test and see if it is correct

###EXAMPLE OF A TEST
```
describe("Animals", () => {
    beforeEach(() => {
        animal = new Animal();
    });
    describe("The Animal class", () => {
        /* test case here */
    })
});
```

### Common JEST Matchers
- Matchers let you test values
    - `expect()`
        - We create assertions inside our `test()`, which will test the specific feature we want to check
            - `expect(2 + 2).toBe(4);`
        - The `expect()`interface allows you to assert that the values are what you expect them to be
            - `toBe()`
            - `toBeDefined()`
            - `toHaveProperty()`
            - `toEqual()`

### Common JEST Methods
- `expect(value)`
- `.not`
- `.toBe(value)`
- `.toHaveReturned()`
- `.toHaveLength(number)`
- `.toBeDefined()`
- `.toBeTruthy()`
- `.toBeFalsy()`
- `.toBeNull()`
- `.toBeUndefined()`
- `.toBeNaN()`
- `.toEqual(value)`
- `.toThrow(error?)`
- and more on [JEST DOCUMENTATION](https://jestjs.io/docs/expect)

### Structuring the Repository
- What the contents should be:
    - **README.md**
        - Describes what the repo contains
    - **npm**
        - Will install all the packages when you type `npm install` in your Terminal and `node_modules` will appear
    - **.gitignore**
        - Store `node_modules` in the .gitignore folder so it remains hidden in Github
    - **package-lock.json**
        - Also created when you run `npm install`
    - **package.json**
        - Similar to a Table of Contents
        - Stores the dependecies and other information about the repo
    - **src**
        - The folder of the code you are working on
    - **test**
        - The folder of the tests
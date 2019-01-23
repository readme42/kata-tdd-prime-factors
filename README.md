# Test driven development prime factorization coding kata

## Preparation
  + Clone this repository
  + Run `npm install` in the repositories directory

## Instructions and hints
 + The only files you need are places in the `src` folder, ignore everything else
   + `prime-factorizer.ts` contains the factorizer class itself
   + `prime-factorizer.spec.ts` contains the unittests for the factorizer  
 + The source folder also contains a `lib`  folder, which contains a `prime-tester` with an `isPrime()` method which might be handy for coding the factorizer
 + There should be no need to compile and run the code on your own - executing the tests is all you need.
 + Do not care about runtime complexity before you are done with the algorithm - we might tackle that optimization with existing tests in a later kata session

## Available scripts
 + `clean` - remove coverage data, Jest cache and transpiled files,
 + `build` - transpile TypeScript to ES6,
 + `build:watch` - interactive watch mode to automatically transpile source files,
 + `test` - run tests,
 + `test:watch` - interactive watch mode to automatically re-run tests
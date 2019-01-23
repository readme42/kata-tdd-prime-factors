import {PrimeTester} from "./lib/prime-tester";

export class PrimeFactorizer {

    /**
     * Calculate the prime factors for a given number
     * @param numbr: the number the prime factors should be calculated for
     * @return array of prime factors for the given number
     */
    public static factorize(numbr: number): number[] {
        console.log("generate prime factors for", numbr, '. Its a prime by itself: ', PrimeTester.isPrime(numbr));
        return [];
    }

}




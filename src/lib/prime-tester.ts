export class PrimeTester {

    /**
     * Tests if a given number is a prime number or not.
     */
    public static isPrime(numbr: number): boolean {
        for (let i = 2, s = Math.sqrt(numbr);  i <= s; i++) {
            if (numbr % i === 0) {
                return false;
            }
        }
        return numbr !== 1 && numbr !== 0;
    }

}

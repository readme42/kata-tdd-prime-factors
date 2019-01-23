import {PrimeTester} from "./prime-tester";

describe('PrimeTester', () => {

    describe('isPrime()', () => {

        it('should be defined', () => {
            expect(PrimeTester.isPrime).toBeDefined();
        });

        it('should be false for 1', () => {
            expect(PrimeTester.isPrime(1)).toBe(false);
        });

        it('should be true for 2', () => {
            expect(PrimeTester.isPrime(2)).toBe(true);
        });

        it('should be true for 3', () => {
            expect(PrimeTester.isPrime(3)).toBe(true);
        });

        it('should be false for 4', () => {
            expect(PrimeTester.isPrime(4)).toBe(false);
        });

        it('should be true for 5', () => {
            expect(PrimeTester.isPrime(5)).toBe(true);
        });

        it('should be true for 13', () => {
            expect(PrimeTester.isPrime(13)).toBe(true);
        });

    })

});



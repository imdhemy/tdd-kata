export function fizzBuzz(num: number): string {
    const multiplyOfThree: boolean = num % 3 === 0;
    const multiplyOfFive: boolean = num % 5 === 0;

    if(! (multiplyOfThree || multiplyOfFive)) return `${num}`;
    if( multiplyOfThree && multiplyOfFive ) return 'FizzBuzz';
    if( multiplyOfThree ) return  'Fizz'
    return 'Buzz';
}

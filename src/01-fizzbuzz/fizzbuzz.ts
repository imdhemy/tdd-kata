export function fizzBuzz(num: number): string {
  let result = '';

  if (num % 3 === 0) result += 'Fizz';
  if (num % 5 === 0) result += 'Buzz';

  return result || num.toString();
}
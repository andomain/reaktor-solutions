import { escapeRegEx, readFile } from "../lib";

const countPairs = (searchStr: string, pair: string): number => {
  const reg = new RegExp(escapeRegEx(pair), 'g');
  return searchStr.match(reg)?.length || 0;
}

const mostCommonPair = (input: string, base: string): string => input.split('').reduce((lookup, char) => {
  const count = countPairs(input, `${base}${char}`);

  if (count > lookup.count) {
    return { char, count }
  }
  return lookup
}, { char: '', count: 0 }).char;

const findBase = (input: string): string => {
  let base = '';
  let result = '';

  while (result.slice(-1) !== ';') {
    base = mostCommonPair(input, base);
    result += base;
  }
  return result;
}

const input = readFile(`${__dirname}/input.txt`);
const baseValue = findBase(input);
console.log(`Result: ${baseValue}`);



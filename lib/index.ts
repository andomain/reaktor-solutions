const fs = require('fs');

export const readFile = (filePath: string, enc = 'utf-8'): string => fs.readFileSync(filePath, enc).trim();
export const readFileLines = (filePath: string, enc = 'utf-8'): string[] => readFile(filePath, enc).split('\n');

export const chunkString = (input: string, length: number): string[] => input.match(new RegExp('.{1,' + length + '}', 'g'))!;

export const bigEndianBinaryToDecimal = (binary: string) => parseInt(binary, 2);

export const escapeRegEx = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

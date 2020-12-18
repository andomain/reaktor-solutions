import { readFileLines, chunkString, bigEndianBinaryToDecimal } from '../lib';

const binaryStreamToAddresses = (binaryStream: string): number[] => chunkString(binaryStream, 8).map(binaryAddr => bigEndianBinaryToDecimal(binaryAddr))

const followAddresses = (addresses: number[]) => {
  const size = addresses.length - 1;
  const overflow = (addr: number) => addr > size;

  let addrPointer = 0;
  while (overflow(addresses[addrPointer])) {
    addrPointer++;
  }

  while (!overflow(addresses[addrPointer])) {
    addrPointer = addresses[addrPointer];
  }

  return addresses[addrPointer];
}

const channels = readFileLines(`${__dirname}/input.txt`);

const resultBytes = channels
  .map(binaryStreamToAddresses)
  .map(followAddresses)
  .map(addr => String.fromCharCode(addr))
  .join('');

console.log(`Result: ${resultBytes}`);

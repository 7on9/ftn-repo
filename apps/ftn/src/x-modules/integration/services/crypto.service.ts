import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import dayjs from 'dayjs';

@Injectable()
export class CryptoService {
  private privateKey: string;

  constructor() {
    // Read Private Key from private.pem file. Each machine has its own file
    this.privateKey = ''; //fs.readFileSync('private.pem', 'utf8') || '';
  }

  generateSignature(data: string): string {
    const sign = crypto.createSign('SHA1'); // Using RSA-SHA256 SHA1 algorithm
    sign.update(data);
    sign.end();
    const signature = sign.sign(this.privateKey, 'base64'); // Base64 encoded result
    return signature;
  }

  generateRequestId(partnerCode: string): string {
    const date = dayjs().format('YYYYMMDDHHmmss'); // Get current time in YYYYMMDDHHmmss format
    // const uniqueId = randomBytes(4).toString('hex').toUpperCase(); // Generate random code (8 hex characters)
    const uniqueId = Math.floor(10000 + Math.random() * 90000).toString();
    return `${partnerCode}BK${date}${uniqueId}`;
  }

  generateRandomCode(length: number = 32): string {
    const characters = 'ABCDEF0123456789';
    let randomCode = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters[randomIndex];
    }

    return randomCode;
  }
}

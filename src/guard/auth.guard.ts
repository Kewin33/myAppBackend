/* eslint-disable */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import CryptoJS from 'crypto-js';
import * as process from 'node:process';

const secret_key = process.env['SECRET_KEY']?.trim(); // Leerzeichen entfernt

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (!token || !secret_key) return false; // Falls Token oder Key fehlen
    console.log(secret_key);
    console.log(token);
    try {
      let decrypted = CryptoJS.AES.decrypt(token, secret_key).toString(CryptoJS.enc.Utf8);
      console.log(decrypted);
      const date = JSON.parse(decrypted);
      const now = Date.now();
      return date < now && now - date < 2000;
    } catch (error) {
      console.error("Fehler beim Entschlüsseln:", error);
      return false;
    }
  }
}

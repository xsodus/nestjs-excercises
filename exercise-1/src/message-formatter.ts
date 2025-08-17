import { Injectable } from '@nestjs/common';

/**
 * MessageFormatter adds a timestamp prefix to messages in the form:
 * [YYYY-MM-DD HH:MM:SS] <message>
 */
@Injectable()
export class MessageFormatter {
  /**
   * Returns the message prefixed with a current timestamp.
   * Example output: [2024-01-30 10:30:15] Hello World!
   */
  fomat(message: string): string {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const timestamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    return `[${timestamp}] ${message}`;
  }
}

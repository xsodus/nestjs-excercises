import { Injectable } from '@nestjs/common';
import { MessageFormatter } from './message-formatter';

@Injectable()
export class LoggerService {
  constructor(private readonly formatter: MessageFormatter) {}

  /**
   * Formats the message using MessageFormatter and logs it to console.
   * Returns the formatted value for convenience/testing.
   */
  log(message: string): string {
    const formatted = this.formatter.format(message);
    // eslint-disable-next-line no-console
    console.log(formatted);
    return formatted;
  }
}

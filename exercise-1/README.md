# Exercise 1 - NestJS Starter

## What Was Implemented

This exercise sets up a minimal NestJS application demonstrating:

1. HTTP endpoint (GET `/`) returning a dynamic greeting string.
2. Layered service design using **dependency injection**.
3. A simple custom `LoggerService` that both logs and returns a formatted value.
4. A `MessageFormatter` provider that adds a timestamp prefix to messages.
5. Clean provider registration via `AppModule`.

## Component Overview

| File | Responsibility |
|------|----------------|
| `main.ts` | Bootstraps the Nest application and starts HTTP server on port 3000. |
| `app.module.ts` | Declares module, controller, and providers (`AppService`, `LoggerService`, `MessageFormatter`). |
| `app.controller.ts` | Exposes `GET /` endpoint. |
| `app.service.ts` | Application business layer; asks `LoggerService` to log & return greeting. |
| `logger.service.ts` | Formats (via `MessageFormatter`) then logs to console; returns formatted text. |
| `message-formatter.ts` | Prepends a timestamp like `[2025-08-17 12:34:56]` to any message. |

## Request Flow

Client -> `GET /` -> `AppController.getHello()` -> `AppService.getHello()` -> `LoggerService.log()` -> `MessageFormatter.fomat()` -> Console log + HTTP response.

Returned payload is a plain string containing the timestamped message.

## Example

HTTP Response body:
```
[2025-08-17 09:15:12] Hello World!
```

Console output (same as response):
```
[2025-08-17 09:15:12] Hello World!
Application is running on: http://localhost:3000
```

## Running the Project

Install dependencies (once):
```
npm install
```

Build TypeScript:
```
npm run build
```

Start (after build):
```
npm start
```

Or run in watch/dev mode (no manual build needed):
```
npm run start:dev
```

Visit: http://localhost:3000

## Notable Implementation Details

- The `LoggerService` returns the same formatted string it logs, simplifying unit testing (you can assert on the return value without intercepting stdout).
- Timestamp formatting manually pads date/time components; this keeps the implementation dependency‑free.
- Providers are registered explicitly in `AppModule` instead of using `@Global()` or auto‑binding, making wiring clear for this exercise.

## Possible Improvements / Next Exercises

1. Add unit tests for `MessageFormatter` and `LoggerService`.
2. Introduce configurable log levels (info/debug/error) via an enum.
3. Replace manual timestamp logic with `Intl.DateTimeFormat` or `dayjs` for locale awareness.
4. Return JSON `{ message: string }` instead of a raw string for extensibility.
5. Add health check endpoint (e.g., `/health`).
6. Demonstrate environment-based configuration (e.g., timezone) using `@nestjs/config`.
7. Add request-scoped correlation IDs for tracing.

---

MIT Licensed.


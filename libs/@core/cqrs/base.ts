import { ICommand, IEvent } from '@nestjs/cqrs';

// Base marker interface for all commands
export interface FtnCommand extends ICommand {
  // Command specific properties
  readonly id: string;
  readonly timestamp: number;
}

// Base marker interface for all events
export interface FtnEvent extends IEvent {
  // Event specific properties
  readonly id: string;
  readonly timestamp: number;
  readonly correlationId?: string;
}

// Base Abstract Command class that all commands should extend
export abstract class BaseCommand implements FtnCommand {
  readonly id: string;
  readonly timestamp: number;

  constructor() {
    this.id = this.generateId();
    this.timestamp = Date.now();
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
  }
}

// Base Abstract Event class that all events should extend
export abstract class BaseEvent implements FtnEvent {
  readonly id: string;
  readonly timestamp: number;
  readonly correlationId?: string;

  constructor(correlationId?: string) {
    this.id = this.generateId();
    this.timestamp = Date.now();
    this.correlationId = correlationId;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
  }
}

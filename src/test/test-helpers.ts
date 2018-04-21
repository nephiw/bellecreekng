import { PipeTransform, Pipe, Type } from '@angular/core';
import { ComponentFixture, tick } from '@angular/core/testing';

/* Create a mock pipe that simply returns the values passed to it. */
export function mockPipe<TPipe extends PipeTransform>(pipeName: string): Type<TPipe> {
  class PipeMock implements PipeTransform {
    public transform(value: string): string {
      return value;
    }
  }
  return Pipe({ name: pipeName })(PipeMock as Type<TPipe>);
}

/** Wait a tick, then detect changes */
export function advance(f: ComponentFixture<any>): void {
  tick();
  f.detectChanges();
}

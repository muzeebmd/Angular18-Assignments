import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureJson',
  pure: false
})
export class ImpureJsonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}

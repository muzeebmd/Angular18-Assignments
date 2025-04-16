import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclamation',
  pure: true
})
export class ExclamationPipe implements PipeTransform {
  transform(value: string): string {
    return value + '!!!';
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {
  transform(values: Array<any>): Array<any> {
    if (values) {
        return values.reverse();
      }
  }
}
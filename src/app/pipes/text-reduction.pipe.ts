import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReduction'
})
export class TextReductionPipe implements PipeTransform {

  transform(value: string, maxSymbols: number): string {
    if (value.length <= maxSymbols) { return value; }
    return value.slice(0, maxSymbols) + '...';
  }

}

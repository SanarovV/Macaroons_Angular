import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapTextNumber'
})
export class SwapTextNumberPipe implements PipeTransform {

  transform(value: number, text: string = '', formatPrice: number = 2): string {
    return `${value.toFixed(formatPrice)}${text}`;
  }

}

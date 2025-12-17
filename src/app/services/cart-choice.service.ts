import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartChoiceService {
  count: number = 0;
  total: number = 0;
  title: string = '';
  constructor() { }

  addAmount(price: number) {
    this.total += price;
  }
}

import { Injectable } from '@angular/core';
import {ChoiceType} from "../types/choice.type";

@Injectable({providedIn: 'root'})
export class ChoiceService {

  constructor() { }

  getChoices(): ChoiceType[] {
    // ajax
    return [
      {
        image: 'raspberry.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'mango.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'vanilla.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'pistachios.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70
      }
    ]
  }
}

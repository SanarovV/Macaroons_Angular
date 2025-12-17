import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChoiceType} from "../../types/choice.type";

@Component({
  selector: 'choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  @Input() choice: ChoiceType;
  @Output() addToCartEvent: EventEmitter<ChoiceType> = new EventEmitter<ChoiceType>();
  constructor() {
    this.choice = {
      image: '',
      title: '',
      quantity: '',
      price: 0,
    }
  }

  ngOnInit(): void {
  }

  addChoiceToCart() {
    this.addToCartEvent.emit(this.choice);
  }

}

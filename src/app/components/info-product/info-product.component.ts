import {Component, Input, OnInit} from '@angular/core';
import {InfoProductType} from "../../types/info-product.type";

@Component({
  selector: 'info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class InfoProductComponent implements OnInit {

  @Input() infoProduct: InfoProductType;
  @Input() index: number = 0;
  constructor() {
    this.infoProduct = {
      title: '',
      description: '',
    }
  }

  ngOnInit(): void {
  }

}

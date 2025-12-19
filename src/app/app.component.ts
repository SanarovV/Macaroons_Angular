import {Component, OnInit} from '@angular/core';
import {ChoiceType} from "./types/choice.type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChoiceService} from "./services/choice.service";
import {CartChoiceService} from "./services/cart-choice.service";
import {InfoProductType} from "./types/info-product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showOrder: boolean = false;
  showPresent: boolean = true;
  loader: boolean = false;
  phone = '375293689868';
  instagram =  {
    link: 'https://www.instagram.com/',
    image: 'instagram.png'
  }
  public choices: ChoiceType[] = [];

  constructor(public choiceService: ChoiceService,
              public cartChoiceService: CartChoiceService) { }

  ngOnInit() {
    this.choices = this.choiceService.getChoices();
  }

  public products: InfoProductType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public formValues = {
    choiceTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(choice: ChoiceType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.choiceTitle = choice.title.toUpperCase();
    alert(`${choice.title} добавлен в корзину`)
    this.cartChoiceService.count++;
    this.cartChoiceService.addAmount(choice.price);
  }

  titleControl = new FormControl('', [Validators.required]);
  nameControl = new FormControl('', [Validators.pattern('^[A-ZА-ЯЁ\\s][a-zа-яё]+$')]);
  phoneControl = new FormControl('', [Validators.required]);
  myForm = new FormGroup({
    choiceTitle: this.titleControl,
    name: this.nameControl,
    phone: this.phoneControl,
  })

  public createForm(): void {
    this.titleControl.markAsTouched();
    this.nameControl.markAsTouched();
    this.phoneControl.markAsTouched();
    this.titleControl.updateValueAndValidity();
    this.nameControl.updateValueAndValidity();
    this.phoneControl.updateValueAndValidity();
    if (this.myForm.invalid) {
      this.markAllAsTouched(this.myForm);
    }
    if (this.myForm.valid) {
      this.loader = true;
      let fromValid = setInterval(() => {
        this.loader = false;
        this.showPresent = false;
        this.myForm.reset();
        this.myForm.markAsPristine();
        this.showOrder = true;
        clearInterval(fromValid);
      }, 1000);

    }
  }

  public markAllAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    })
  }
}

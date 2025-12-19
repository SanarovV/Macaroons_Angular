import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru-RU');

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import { SwapTextNumberPipe } from './pipes/swap-text-number.pipe';
import { InfoProductComponent } from './components/info-product/info-product.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { BtnEffectDirective } from './directives/btn-effect.directive';
import { TextReductionPipe } from './pipes/text-reduction.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SwapTextNumberPipe,
    InfoProductComponent,
    ChoiceComponent,
    BtnEffectDirective,
    TextReductionPipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-RU'},
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

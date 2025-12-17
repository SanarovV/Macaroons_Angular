import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import { SwapTextNumberPipe } from './pipes/swap-text-number.pipe';
import { InfoProductComponent } from './components/info-product/info-product.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { BtnEffectDirective } from './directives/btn-effect.directive';
import { TextReductionPipe } from './pipes/text-reduction.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SwapTextNumberPipe,
    InfoProductComponent,
    ChoiceComponent,
    BtnEffectDirective,
    TextReductionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

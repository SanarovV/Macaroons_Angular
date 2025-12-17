import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnEffect]'
})
export class BtnEffectDirective {

  @Input() btnBgDefaultColor: string = 'rgba(113, 8, 30, 0.50)';
  @Input() btnBgHoverColor: string = 'rgba(113, 8, 30, 1)';

  private _backgroundColor: string = '';

  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  @HostListener('mouseenter')
  onHover() {
    this.changeElementBgColor(this.btnBgHoverColor);
  }

  @HostListener('mouseleave')
  onUnHover() {
    this.changeElementBgColor(this.btnBgDefaultColor);

  }

  constructor(private el: ElementRef, private rend: Renderer2) {
    this.rend.setStyle(this.el.nativeElement, 'background-image', 'none');
  }

  ngOnInit(): void {
    this.changeElementBgColor(this.btnBgDefaultColor);
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;
  }

}

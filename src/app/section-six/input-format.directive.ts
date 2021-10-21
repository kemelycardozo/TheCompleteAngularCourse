import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format: string;
  
  //Se eu quiser deixar mais limpo a chamada da diretiva eu a chamos passando apenas o argumento 
  //sem um nome próprio, esse terá o nome da própria diretiva, lembrando que só posso fazer isso 
  //caso eu possua apenas 1 propriedade
  @Input('appInputFormat') format: string;

  constructor(private el: ElementRef) { }


  // @HostListener('focus') onFocus(){
  //   console.log("on Focus");
  // }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
}
